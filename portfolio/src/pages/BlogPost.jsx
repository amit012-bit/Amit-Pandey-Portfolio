import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/SocialLinks'
import { BLOG_META } from '../data/content'
import { getPostById, getPublishedPosts } from '../data/blog'

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getSections(body) {
  if (body.sections?.length) return body.sections
  if (!body.paragraphs?.length) return []
  return [{
    id: 'content',
    num: '01',
    title: 'Article',
    blocks: body.paragraphs.map((text) => ({ type: 'text', text })),
  }]
}

function BlogBlock({ block }) {
  if (block.type === 'punch') {
    return <p className="blog-block-punch">{block.text}</p>
  }
  if (block.type === 'pull') {
    return <blockquote className="blog-block-pull">{block.text}</blockquote>
  }
  return <p className="blog-block-text">{block.text}</p>
}

function ChapterNav({ sections, activeId, className }) {
  return (
    <nav className={className} aria-label="Chapters">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`blog-chapter-link${activeId === section.id ? ' is-active' : ''}`}
        >
          <span className="blog-chapter-num">{section.num}</span>
          <span className="blog-chapter-label">{section.title}</span>
        </a>
      ))}
    </nav>
  )
}

export default function BlogPost() {
  const { postId } = useParams()
  const post = getPostById(postId)
  const allPosts = getPublishedPosts()
  const contentRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  const sections = getSections(post?.body ?? {})
  const postIndex = post ? allPosts.findIndex((p) => p.id === postId) : -1
  const postNum = String(Math.max(postIndex, 0) + 1).padStart(2, '0')
  const related = post ? allPosts.filter((p) => p.id !== post.id).slice(0, 3) : []

  useEffect(() => {
    setActiveSection(sections[0]?.id ?? '')
  }, [postId, sections])

  useEffect(() => {
    const content = contentRef.current
    if (!content) return undefined

    const updateProgress = () => {
      const rect = content.getBoundingClientRect()
      const contentTop = window.scrollY + rect.top
      const contentHeight = content.offsetHeight
      const viewport = window.innerHeight
      const start = contentTop - viewport * 0.15
      const end = contentTop + contentHeight - viewport * 0.65
      const range = Math.max(end - start, 1)
      const next = Math.min(1, Math.max(0, (window.scrollY - start) / range))
      setProgress(next)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [postId])

  useEffect(() => {
    const nodes = document.querySelectorAll('.blog-section[id]')
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { rootMargin: '-18% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [postId, sections.length])

  if (!post || post.published === false) return <Navigate to="/#blog" replace />

  const { body } = post

  return (
    <div className="site-shell blog-detail-page">
      <div className="grid-overlay" />
      <div className="blog-reading-progress" aria-hidden="true">
        <div
          className="blog-reading-progress-bar"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <Navbar />

      <article className="blog-detail">
        <div className="pd-topbar section-wrap">
          <Link className="pd-back-btn" to="/#blog">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            ALL POSTS
          </Link>
          <div className="pd-topbar-right">
            <span className="pd-topbar-index">{postNum} / {String(allPosts.length).padStart(2, '0')}</span>
            <span className="blog-read-progress-label">{Math.round(progress * 100)}%</span>
            <Link className="outline-btn" to="/#contact">CONTACT</Link>
          </div>
        </div>

        <div className="pd-intro section-wrap blog-detail-intro">
          <div className="pd-intro-grid">
            <div className="pd-intro-left">
              <p className="pd-category-badge">
                <span className="pd-category-line" />
                {body.category}
              </p>
              <h1 className="pd-title">{post.title}</h1>
              <p className="blog-intro-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.readTime && (
                  <>
                    <span aria-hidden="true"> · </span>
                    <span>{post.readTime}</span>
                  </>
                )}
                {sections.length > 1 && (
                  <>
                    <span aria-hidden="true"> · </span>
                    <span>{sections.length} chapters</span>
                  </>
                )}
              </p>
            </div>

            <div className="pd-intro-right">
              <span className="pd-watermark-num" aria-hidden="true">{postNum}</span>
              <p className="pd-lead">{body.lead}</p>
            </div>
          </div>

          {sections.length > 1 && (
            <ChapterNav
              sections={sections}
              activeId={activeSection}
              className="blog-chapters-mobile"
            />
          )}
        </div>

        <div className="blog-detail-body section-wrap">
          <div className="pd-body-grid">
            <div className="blog-article-content" ref={contentRef}>
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="blog-section"
                >
                  <header className="blog-section-header">
                    <span className="blog-section-num">{section.num}</span>
                    <h2 className="blog-section-title">{section.title}</h2>
                  </header>
                  <div className="blog-section-blocks">
                    {section.blocks.map((block, i) => (
                      <BlogBlock key={i} block={block} />
                    ))}
                  </div>
                </section>
              ))}

              {body.closingQuestion && (
                <p className="blog-prose-question">{body.closingQuestion}</p>
              )}
            </div>

            <aside className="pd-body-aside blog-detail-aside">
              {sections.length > 1 && (
                <>
                  <div className="pd-aside-header">
                    <span className="pd-aside-header-label">IN THIS POST</span>
                  </div>
                  <ChapterNav
                    sections={sections}
                    activeId={activeSection}
                    className="blog-chapters"
                  />
                </>
              )}

              {post.tags?.length > 0 && (
                <div className="pd-aside-card">
                  <p className="pd-aside-label">TOPICS</p>
                  <div className="pd-aside-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="pd-aside-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pd-aside-cta">
                <Link className="outline-btn pd-aside-btn" to="/#blog">
                  MORE POSTS
                </Link>
                <Link className="solid-btn pd-aside-btn" to="/#contact">
                  GET IN TOUCH
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {related.length > 0 && (
          <div className="blog-detail-more section-wrap">
            <div className="pd-more-header">
              <div>
                <p className="tiny-label">KEEP READING</p>
                <h2 className="pd-more-title">More Posts</h2>
              </div>
            </div>
            <div className="blog-grid blog-grid--compact">
              {related.map((relatedPost) => (
                <Link key={relatedPost.id} className="blog-card-link" to={`/blog/${relatedPost.id}`}>
                  <article className="blog-card info-card">
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <time dateTime={relatedPost.date}>{formatDate(relatedPost.date)}</time>
                      </div>
                      <h3>{relatedPost.title}</h3>
                      <p className="blog-card-excerpt">{relatedPost.excerpt}</p>
                      <p className="blog-card-cta">{BLOG_META.readCta}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="pd-social section-wrap">
          <p className="tiny-label pd-social-label">CONNECT</p>
          <SocialLinks />
        </div>
      </article>
    </div>
  )
}

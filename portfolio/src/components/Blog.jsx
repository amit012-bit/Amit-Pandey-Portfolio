import { Link } from 'react-router-dom'
import { BLOG_META } from '../data/content'
import { getPublishedPosts } from '../data/blog'

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function BlogPostCard({ post, base, featured = false }) {
  const coverSrc = post.coverImage
    ? `${base}${post.coverImage.replace(/^\//, '')}`
    : null

  const card = (
    <article className={`blog-card info-card${featured ? ' blog-card--featured' : ''}`}>
      {coverSrc && (
        <div className="blog-card-thumb">
          <img src={coverSrc} alt="" />
          <div className="blog-card-thumb-overlay" />
        </div>
      )}
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.readTime && (
            <>
              <span className="blog-card-meta-sep" aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>
        <h3>{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        {post.tags?.length > 0 && (
          <div className="blog-card-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        )}
        <p className="blog-card-cta">{BLOG_META.readCta}</p>
      </div>
    </article>
  )

  if (post.externalUrl) {
    return (
      <a
        className="blog-card-link"
        href={post.externalUrl}
        target="_blank"
        rel="noreferrer"
      >
        {card}
      </a>
    )
  }

  return (
    <Link className="blog-card-link" to={`/blog/${post.id}`}>
      {card}
    </Link>
  )
}

function BlogEmptyState() {
  const { emptyState } = BLOG_META

  return (
    <div className="blog-empty panel">
      <div className="blog-empty-grid">
        <div className="blog-terminal" aria-hidden="true">
          <div className="blog-terminal-bar">
            <span className="blog-terminal-dot" />
            <span className="blog-terminal-dot" />
            <span className="blog-terminal-dot" />
            <span className="blog-terminal-title">draft.post</span>
          </div>
          <pre className="blog-terminal-body">{`// first post loading...
const topics = [
  'agentic AI',
  'production LLMs',
  'engineering lessons',
];

export default write;`}</pre>
        </div>

        <div className="blog-empty-copy">
          <span className="blog-empty-status">{emptyState.status}</span>
          <h3>{emptyState.title}</h3>
          <p>{emptyState.description}</p>
          <div className="blog-topic-chips">
            {emptyState.topics.map((topic) => (
              <span key={topic} className="blog-topic-chip">{topic}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  const base = import.meta.env.BASE_URL
  const posts = getPublishedPosts()
  const featured = posts.find((post) => post.featured) ?? posts[0]
  const rest = featured ? posts.filter((post) => post.id !== featured.id) : []

  return (
    <section className="section-wrap section-block" id="blog">
      <div className="section-title-row">
        <p className="tiny-label">{BLOG_META.sectionLabel}</p>
        <h2>{BLOG_META.heading}</h2>
        <p className="projects-subheading">{BLOG_META.subheading}</p>
      </div>

      {posts.length === 0 ? (
        <BlogEmptyState />
      ) : (
        <div className="blog-grid">
          {featured && (
            <BlogPostCard post={featured} base={base} featured />
          )}
          {rest.map((post) => (
            <BlogPostCard key={post.id} post={post} base={base} />
          ))}
        </div>
      )}
    </section>
  )
}

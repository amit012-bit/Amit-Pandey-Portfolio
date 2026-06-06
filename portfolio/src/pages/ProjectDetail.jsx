import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/SocialLinks'
import { resumePdfHref } from '../data/links'
import { ALL_PROJECTS, getProjectById } from '../data/projects'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const base = import.meta.env.BASE_URL
  const project = getProjectById(projectId)

  if (!project) return <Navigate to="/" replace />

  const { detail } = project
  const imgSrc = `${base}${project.image.replace(/^\//, '')}`
  const isSvg = project.image.endsWith('.svg')
  const projectIndex = ALL_PROJECTS.findIndex((p) => p.id === projectId)
  const projectNum = String(projectIndex + 1).padStart(2, '0')
  const related = ALL_PROJECTS.filter((p) => p.id !== project.id).slice(0, 3)
  const projectLinks = [
    project.liveUrl && { href: project.liveUrl, label: 'LIVE DEMO', variant: 'solid-btn' },
    project.sourceUrl && { href: project.sourceUrl, label: 'SOURCE CODE', variant: 'outline-btn' },
  ].filter(Boolean)

  const sections = [
    detail.problem && {
      title: 'The Problem',
      body: <p className="pd-overview">{detail.problem}</p>,
    },
    detail.overview && {
      title: 'Overview',
      body: <p className="pd-overview">{detail.overview}</p>,
    },
    detail.highlights?.length > 0 && {
      title: 'What I Built',
      body: (
        <ol className="pd-highlights">
          {detail.highlights.map((line, i) => (
            <li key={i}>
              <span className="pd-highlight-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="pd-highlight-text">{line}</span>
            </li>
          ))}
        </ol>
      ),
    },
    detail.decisions?.length > 0 && {
      title: 'Decisions & Tradeoffs',
      body: (
        <ul className="pd-decisions">
          {detail.decisions.map((line, i) => (
            <li key={i} className="pd-decision">
              <span className="pd-decision-marker" aria-hidden="true" />
              <span className="pd-decision-text">{line}</span>
            </li>
          ))}
        </ul>
      ),
    },
    detail.results?.length > 0 && {
      title: 'Impact',
      body: (
        <div className="pd-results">
          {detail.results.map((r) => (
            <div key={r.label} className="pd-result">
              <span className="pd-result-value">{r.value}</span>
              <span className="pd-result-label">{r.label}</span>
            </div>
          ))}
        </div>
      ),
    },
    detail.reflection && {
      title: "What I'd Do Differently",
      body: <p className="pd-overview">{detail.reflection}</p>,
    },
  ].filter(Boolean)

  return (
    <div className="site-shell">
      <div className="grid-overlay" />
      <Navbar />

      <article className="project-detail">

        {/* ── Top bar ── */}
        <div className="pd-topbar section-wrap">
          <Link className="pd-back-btn" to="/#work">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            ALL WORK
          </Link>
          <div className="pd-topbar-right">
            <span className="pd-topbar-index">{projectNum} / {String(ALL_PROJECTS.length).padStart(2, '0')}</span>
            <Link className="outline-btn" to="/#contact">CONTACT</Link>
          </div>
        </div>

        {/* ── Intro: two-column split ── */}
        <div className="pd-intro section-wrap">
          <div className="pd-intro-grid">

            {/* Left: category + title */}
            <div className="pd-intro-left">
              <p className="pd-category-badge">
                <span className="pd-category-line" />
                {project.category}
              </p>
              <h1 className="pd-title">{project.title}</h1>
            </div>

            {/* Right: watermark number + lead + meta */}
            <div className="pd-intro-right">
              <span className="pd-watermark-num" aria-hidden="true">{projectNum}</span>
              <p className="pd-lead">{detail.lead}</p>
              <div className="pd-meta-grid">
                {project.stack && (
                  <div className="pd-meta-card">
                    <span className="pd-meta-label">STACK</span>
                    <span className="pd-meta-value">{project.stack}</span>
                  </div>
                )}
                <div className="pd-meta-card">
                  <span className="pd-meta-label">TYPE</span>
                  <span className="pd-meta-value">{project.category}</span>
                </div>
                {detail.tags?.length > 0 && (
                  <div className="pd-meta-card pd-meta-card--wide">
                    <span className="pd-meta-label">TECHNOLOGIES</span>
                    <div className="pd-meta-tags">
                      {detail.tags.map((t) => (
                        <span key={t} className="pd-meta-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── Hero image ── */}
        <div className={`pd-hero-image${isSvg ? ' pd-hero-image--svg' : ''}`}>
          <img src={imgSrc} alt={project.title} />
          <div className="pd-hero-caption">
            <span className="pd-hero-caption-title">{project.title}</span>
            <span className="pd-hero-caption-stack">{project.stack}</span>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="pd-body section-wrap">
          <div className="pd-body-grid">

            <div className="pd-body-main">
              {sections.map((section, i) => (
                <section className="pd-section" key={section.title}>
                  <h2 className="pd-section-title">
                    <span className="pd-section-num">{String(i + 1).padStart(2, '0')}</span>
                    {section.title}
                  </h2>
                  {section.body}
                </section>
              ))}
            </div>

            {/* Sticky aside */}
            <aside className="pd-body-aside">
              <div className="pd-aside-header">
                <span className="pd-aside-header-label">PROJECT INFO</span>
              </div>
              {project.stack && (
                <div className="pd-aside-card">
                  <p className="pd-aside-label">STACK</p>
                  <p className="pd-aside-value">{project.stack}</p>
                </div>
              )}
              <div className="pd-aside-card">
                <p className="pd-aside-label">TYPE</p>
                <p className="pd-aside-value">{project.category}</p>
              </div>
              {detail.tags?.length > 0 && (
                <div className="pd-aside-card">
                  <p className="pd-aside-label">TECHNOLOGIES</p>
                  <div className="pd-aside-tags">
                    {detail.tags.map((t) => (
                      <span key={t} className="pd-aside-tag">{t}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="pd-aside-cta">
                {projectLinks.map((link) => (
                  <a key={link.label} className={`${link.variant} pd-aside-btn`} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
                <a className="solid-btn pd-aside-btn" href={resumePdfHref(base)} target="_blank" rel="noreferrer">
                  RESUME PDF
                </a>
                <Link className="outline-btn pd-aside-btn" to="/#contact">
                  HIRE ME
                </Link>
              </div>
            </aside>

          </div>
        </div>

        {/* ── More Projects ── */}
        {related.length > 0 && (
          <div className="pd-more section-wrap">
            <div className="pd-more-header">
              <div>
                <p className="tiny-label">KEEP EXPLORING</p>
                <h2 className="pd-more-title">More Projects</h2>
              </div>
              <Link className="outline-btn" to="/#work">ALL WORK</Link>
            </div>
            <div className="works-grid works-grid--sm">
              {related.map((p) => (
                <Link key={p.id} className="work-card-link" to={`/work/${p.id}`}>
                  <article className="work-card">
                    <div className="work-thumb">
                      <img src={`${base}${p.image.replace(/^\//, '')}`} alt={p.title} />
                      <div className="work-thumb-overlay" />
                    </div>
                    <div className="work-content">
                      <p className="work-stack">{p.stack}</p>
                      <h3>{p.title}</h3>
                      <p>{p.teaser || p.description}</p>
                      <p className="work-card-cta">VIEW PROJECT →</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Footer social ── */}
        <div className="pd-social section-wrap">
          <p className="pd-social-label tiny-label">CONNECT</p>
          <SocialLinks variant="row" />
        </div>

      </article>
    </div>
  )
}

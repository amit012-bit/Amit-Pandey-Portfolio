import { Link } from 'react-router-dom'
import { resumePdfHref } from '../data/links'
import { MORE_PROJECTS, RESUME_PROJECTS } from '../data/projects'
import { PROJECTS_META } from '../data/content'

export default function Projects() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="section-wrap section-block" id="work">
      <div className="section-title-row">
        <p className="tiny-label">{PROJECTS_META.sectionLabel}</p>
        <h2>{PROJECTS_META.heading}</h2>
        <p className="projects-subheading">{PROJECTS_META.subheading}</p>
      </div>

      <div className="works-grid">
        {RESUME_PROJECTS.map((project) => (
          <Link key={project.id} className="work-card-link" to={`/work/${project.id}`}>
            <article className="work-card work-card--flagship">
              <div className="work-thumb">
                <img src={`${base}${project.image.replace(/^\//, '')}`} alt={project.title} />
                <div className="work-thumb-overlay" />
              </div>
              <div className="work-content">
                <p className="work-stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.teaser}</p>
                <p className="work-card-cta">CASE PROJECT →</p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <p className="projects-subheading projects-subheading--spaced">{PROJECTS_META.moreSectionLabel}</p>
      <div className="works-grid works-grid--sm">
        {MORE_PROJECTS.map((project) => (
          <Link key={project.id} className="work-card-link" to={`/work/${project.id}`}>
            <article className="work-card">
              <div className="work-thumb">
                <img src={`${base}${project.image.replace(/^\//, '')}`} alt={project.title} />
                <div className="work-thumb-overlay" />
              </div>
              <div className="work-content">
                <p className="work-stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="work-card-cta">CASE PROJECT →</p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="center-action">
        <a className="outline-btn" href={resumePdfHref(base)} target="_blank" rel="noreferrer">
          {PROJECTS_META.resumeCta}
        </a>
      </div>
    </section>
  )
}

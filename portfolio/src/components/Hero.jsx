import { Link } from 'react-router-dom'
import { LINKS, resumePdfHref } from '../data/links'
import { RESUME_PROJECTS } from '../data/projects'
import { HERO, PERSONAL } from '../data/content'

export default function Hero() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="hero section-wrap panel" id="feed">
      <div className="hero-copy">
        <p className="tiny-label">{HERO.availabilityLabel}</p>
        <h1>
          {HERO.headlineLines.map((line, i) => (
            <span key={i}>{line}{i < HERO.headlineLines.length - 1 && <br />}</span>
          ))}
        </h1>
        <p>{HERO.tagline}</p>
        <p className="hero-role-line">{HERO.roleLine}</p>
        <div className="hero-actions">
          <a className="solid-btn" href="#contact">{HERO.cta.primary}</a>
          <a className="outline-btn" href="#work">{HERO.cta.secondary}</a>
          <a className="outline-btn" href={resumePdfHref(base)} target="_blank" rel="noreferrer">{HERO.cta.resume}</a>
        </div>
        <div className="hero-stats">
          {HERO.stats.map((s) => (
            <div key={s.num} className="hero-stat">
              <span className="hero-stat-num">{s.num}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-resume-preview">
          <p className="hero-resume-label">{HERO.featuredProjectsLabel}</p>
          <div className="hero-resume-grid">
            {RESUME_PROJECTS.map((p) => (
              <Link key={p.id} className="hero-resume-card" to={`/work/${p.id}`}>
                <span className="hero-resume-card-title">{p.title}</span>
                <span className="hero-resume-card-stack">{p.stack}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-art">
        <img
          className="hero-character"
          src={`${base}${PERSONAL.heroImage}`}
          alt={PERSONAL.name}
        />
      </div>
    </section>
  )
}

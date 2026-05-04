import { LINKS, resumePdfHref } from '../data/links'
import { ABOUT, PERSONAL } from '../data/content'

export default function About() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="section-wrap split section-block" id="about">
      <div className="panel about-panel">
        <p className="tiny-label">{ABOUT.sectionLabel}</p>
        <h2>{ABOUT.greeting}</h2>
        <p className="about-hook">{ABOUT.hook}</p>
        {ABOUT.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <div className="about-meta">
          <p className="tiny-label">{ABOUT.detailsLabel}</p>
          <p>{PERSONAL.location}</p>
          <p><a href={LINKS.mailto}>{LINKS.email}</a></p>
          <p><a href={LINKS.phoneTel}>{LINKS.phoneDisplay}</a></p>
          <p>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {' · '}
            <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
          <p>{PERSONAL.education}</p>
          <p>{PERSONAL.linkedinStats}</p>
        </div>

        <div className="stats-row">
          {ABOUT.stats.map((s) => (
            <div key={s.value}>
              <p className="stat">{s.value}</p>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="about-actions">
          <a className="solid-btn" href="#contact">{ABOUT.cta.primary}</a>
          <a className="outline-btn" href={resumePdfHref(base)} target="_blank" rel="noreferrer">{ABOUT.cta.resume}</a>
        </div>
      </div>

      <aside className="panel about-aside">
        <img src={`${base}${PERSONAL.aboutImage}`} alt={PERSONAL.name} />
        <div className="about-status-badge">
          <div className="about-status-left">
            <span className="about-status-label">{ABOUT.statusLabel}</span>
            <span className="about-status-value">{PERSONAL.availabilityStatus}</span>
          </div>
          <div className="about-status-icons">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="3"/>
                <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>
              </svg>
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href={LINKS.mailto} aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </section>
  )
}

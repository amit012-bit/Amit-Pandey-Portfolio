import { LINKS } from '../data/links'
import { EXPERIENCES, EXPERIENCE_META, PERSONAL } from '../data/content'

export default function Experience() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="section-wrap section-block" id="experience">
      <div className="experience-layout">
        <div className="experience-header">
          <p className="tiny-label">{EXPERIENCE_META.sectionLabel}</p>
          <h2>{EXPERIENCE_META.heading}</h2>
          <div className="experience-visual panel">
            <img
              className="experience-portrait"
              src={`${base}${PERSONAL.experienceImage}`}
              alt={PERSONAL.name}
            />
          </div>
        </div>
        <div className="timeline">
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} className="timeline-item panel">
              <div className="timeline-head">
                <div>
                  <h3>{exp.role}</h3>
                  {exp.subtitle && <p className="exp-subtitle">{exp.subtitle}</p>}
                  <p className="card-kicker">{exp.company}</p>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-dot">·</span>
                    <span className="timeline-type">{exp.type}</span>
                  </div>
                  <p className="experience-location">{exp.location}</p>
                </div>
              </div>
              {exp.challenge && (
                <p className="exp-challenge">
                  <span className="exp-challenge-label">Challenge — </span>
                  {exp.challenge}
                </p>
              )}
              <ul className="bullet-list">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {exp.outcomes && (
                <div className="exp-outcomes">
                  <p className="exp-outcomes-label">Outcomes</p>
                  <div className="exp-outcomes-grid">
                    {exp.outcomes.map((o) => (
                      <span key={o} className="exp-outcome-chip">{o}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
      <div className="center-action" style={{ marginTop: 28 }}>
        <a className="outline-btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
          {EXPERIENCE_META.linkedinCta}
        </a>
      </div>
    </section>
  )
}

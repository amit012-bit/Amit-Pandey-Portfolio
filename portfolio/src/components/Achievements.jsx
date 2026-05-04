import { PROCESS, PROCESS_META } from '../data/content'

export default function Achievements() {
  return (
    <section className="section-wrap section-block" id="process">
      <div className="section-title-row">
        <p className="tiny-label">{PROCESS_META.sectionLabel}</p>
        <h2>{PROCESS_META.heading}</h2>
        <p className="projects-subheading">{PROCESS_META.subheading}</p>
      </div>
      <div className="process-cards-grid">
        {PROCESS.map((step) => (
          <article key={step.num} className="process-card info-card">
            <span className="process-card-num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

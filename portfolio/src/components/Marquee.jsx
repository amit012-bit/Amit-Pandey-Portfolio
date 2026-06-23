import { CERTIFICATIONS, CERTIFICATIONS_META } from '../data/content'

const HIGHLIGHT_CERTS = CERTIFICATIONS.filter((c) => c.url)

export default function Marquee() {
  return (
    <section className="section-wrap section-block" id="highlights">
      <div className="section-title-row">
        <p className="tiny-label">{CERTIFICATIONS_META.highlightsLabel}</p>
        <h2>{CERTIFICATIONS_META.highlightsHeading}</h2>
      </div>
      <div className="certs-grid certs-grid--5">
        {HIGHLIGHT_CERTS.map((c) => (
          <article
            key={c.id}
            className={`cert-card info-card${c.highlight ? ' cert-card--highlight' : ''}`}
          >
            <div className="cert-card-top">
              <span className="cert-issuer">{c.issuer}</span>
              <span className="cert-date">{c.date}</span>
            </div>
            <h3>{c.title}</h3>
            {c.credentialId && (
              <p className="cert-credential-id">ID: {c.credentialId}</p>
            )}
            <a
              className="outline-btn cert-link"
              href={c.url}
              target="_blank"
              rel="noreferrer"
            >
              {CERTIFICATIONS_META.viewCta}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

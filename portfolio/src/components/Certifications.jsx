import { CERTIFICATIONS, CERTIFICATIONS_META } from '../data/content'

function IssuerBadge({ issuer }) {
  if (issuer === 'Anthropic') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-label="Anthropic">
        <rect width="22" height="22" rx="5" fill="#CC785C"/>
        <text x="11" y="15" textAnchor="middle" fontFamily="serif" fontSize="13" fontWeight="700" fill="#fff">A</text>
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-label="Udemy">
      <rect width="22" height="22" rx="5" fill="#A435F0"/>
      <text x="11" y="15" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">U</text>
    </svg>
  )
}

export default function Certifications() {
  return (
    <section className="section-wrap section-block" id="certifications">
      <div className="section-title-row">
        <p className="tiny-label">{CERTIFICATIONS_META.sectionLabel}</p>
        <h2>{CERTIFICATIONS_META.heading}</h2>
        <p className="projects-subheading">{CERTIFICATIONS_META.subheading}</p>
      </div>
      <div className="certs-grid">
        {CERTIFICATIONS.map((cert) => (
          <article
            key={cert.id}
            className={`cert-card panel info-card${cert.highlight ? ' cert-card--highlight' : ''}`}
          >
            <div className="cert-card-top">
              <IssuerBadge issuer={cert.issuer} />
              <span className="cert-date">{cert.date}</span>
            </div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            {cert.credentialId && (
              <p className="cert-credential-id">ID: {cert.credentialId}</p>
            )}
            {cert.skills?.length > 0 && (
              <div className="cert-skills">
                {cert.skills.map((s) => (
                  <span key={s} className="cert-skill-chip">{s}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

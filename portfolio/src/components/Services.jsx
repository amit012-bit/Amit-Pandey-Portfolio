import { useState } from 'react'
import { SERVICES, SERVICES_META } from '../data/content'

export default function Services() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section-wrap section-block" id="services">
      <div className="services-layout">
        <div className="services-left panel">
          <p className="tiny-label">{SERVICES_META.sectionLabel}</p>
          <h2>{SERVICES_META.heading}</h2>
          <p className="services-intro">{SERVICES_META.intro}</p>
          <div className="services-highlights">
            {SERVICES_META.highlights.map((h) => (
              <div key={h.num} className="services-highlight-item">
                <span className="sh-num">{h.num}</span>
                <span className="sh-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="services-right">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className={`service-item${open === s.num ? ' service-item--open' : ''}`}
              onClick={() => setOpen(open === s.num ? null : s.num)}
            >
              <div className="service-header">
                <span className="service-num">{s.num}</span>
                <h3 className="service-title">{s.title}</h3>
                <span className="service-chevron">{open === s.num ? '−' : '+'}</span>
              </div>
              {open === s.num && (
                <div className="service-body">
                  <p className="service-detail">{s.detail}</p>
                  <div className="service-tags">
                    {s.tags.map((tag) => (
                      <span key={tag} className="service-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

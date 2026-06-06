import { LINKS } from '../data/links'
import { CONTACT, PERSONAL } from '../data/content'
import SocialLinks from './SocialLinks'

export default function Contact() {
  return (
    <section className="section-wrap section-block contact" id="contact">
      <p className="tiny-label">{CONTACT.sectionLabel}</p>
      <h2>{CONTACT.heading}</h2>
      <p className="contact-tagline">
        {CONTACT.tagline.split('\n').map((line, i, arr) => (
          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
        ))}
      </p>
      <div className="contact-actions">
        <a className="solid-btn contact-cta" href={LINKS.mailto}>
          {CONTACT.cta}
        </a>
        <a className="outline-btn contact-cta" href={LINKS.upwork} target="_blank" rel="noreferrer">
          {CONTACT.upworkCta}
        </a>
      </div>
      <p className="contact-email-line">
        <a href={LINKS.mailto}>{LINKS.email}</a>
        <span className="contact-sep"> · </span>
        <a href={LINKS.phoneTel}>{LINKS.phoneDisplay}</a>
      </p>
      <SocialLinks className="contact-social" />
      <p className="footer-watermark">{PERSONAL.footerWatermark}</p>
    </section>
  )
}

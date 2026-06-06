import { LINKS } from '../data/links'

const ext = { target: '_blank', rel: 'noreferrer' }

export default function SocialLinks({ className = '', variant = 'row' }) {
  return (
    <div className={`social-links social-links--${variant} ${className}`.trim()}>
      <a href={LINKS.linkedin} {...ext}>
        LinkedIn
      </a>
      <a href={LINKS.github} {...ext}>
        GitHub
      </a>
      <a href={LINKS.upwork} {...ext}>
        Upwork
      </a>
      <a href={LINKS.mailto}>
        Email
      </a>
      <a href={LINKS.phoneTel}>
        Phone
      </a>
    </div>
  )
}

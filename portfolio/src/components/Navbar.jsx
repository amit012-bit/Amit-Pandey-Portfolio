import { Link } from 'react-router-dom'
import { LINKS, resumePdfHref } from '../data/links'
import { NAVBAR } from '../data/content'

export default function Navbar() {
  const base = import.meta.env.BASE_URL

  return (
    <header className="topbar section-wrap">
      <Link className="brand" to="/">
        {NAVBAR.brand}
      </Link>
      <nav className="menu">
        {NAVBAR.links.map((link) => (
          <Link key={link.href} to={link.href}>{link.label}</Link>
        ))}
      </nav>
      <div className="nav-external">
        <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={resumePdfHref(base)} target="_blank" rel="noreferrer">Resume</a>
      </div>
      <Link className="solid-btn" to="/#contact">
        {NAVBAR.hireCta}
      </Link>
    </header>
  )
}

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MarqueeTicker from '../components/MarqueeTicker'
import Projects from '../components/Projects'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Achievements from '../components/Achievements'
import Certifications from '../components/Certifications'
import Marquee from '../components/Marquee'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <div className="site-shell">
      <div className="grid-overlay" />
      <Navbar />

      <main>
        <Hero />
        <MarqueeTicker />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Certifications />
        <Achievements />
        <Marquee />
        <Contact />
      </main>
    </div>
  )
}

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

const projects = [
  {
    number: '01',
    title: 'FlowRec',
    type: 'Product / 2026',
    description:
      'A privacy-first screen recorder that turns cursor movement into cinematic, polished product videos directly in the browser.',
    tags: ['React', 'Next.js', 'Media APIs'],
    className: 'project-flow',
    href: 'https://flow-rec.vercel.app/',
  },
  {
    number: '02',
    title: 'Motion studies',
    type: 'Experiments / Ongoing',
    description:
      'A collection of tactile interface experiments exploring rhythm, spatial UI, and the little details that make software feel alive.',
    tags: ['Interaction', 'Prototyping', 'Visual systems'],
    className: 'project-motion',
    href: 'https://github.com/Tejas-singh-31',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <nav className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <span className="wordmark-mark">T</span>
          <span>Tejas Singh</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-resume" href="https://github.com/Tejas-singh-31" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid">
          <p className="eyebrow"><span className="live-dot" /> Founder of FlowRec · Available for meaningful work</p>
          <h1>I make digital<br /><em>things feel</em> human.</h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              I&apos;m Tejas — founder of FlowRec, developer, and creative builder crafting
              focused products, expressive interfaces, and tools that earn their place in your workflow.
            </p>
            <a className="circle-link" href="#work" aria-label="See selected work">
              <ArrowDownRight size={26} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core"><Sparkles size={30} /></div>
          <span className="orbit-label label-top">CURIOUS BY DEFAULT</span>
          <span className="orbit-label label-bottom">BUILD / LEARN / REPEAT</span>
        </div>
        <span className="hero-index">01 — INTRO</span>
      </section>

      <section className="marquee" aria-label="Skills">
        <div className="marquee-track">
          <span>Product thinking</span><b>✳</b><span>Frontend craft</span><b>✳</b>
          <span>Creative technology</span><b>✳</b><span>Product thinking</span><b>✳</b>
          <span>Frontend craft</span><b>✳</b><span>Creative technology</span><b>✳</b>
        </div>
      </section>

      <section className="work-section section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Selected work <span>02</span></p>
          <h2>Ideas, made<br /><em>useful.</em></h2>
          <p className="section-note">A small selection of projects I&apos;ve designed, built, and shipped.</p>
        </div>
        <div className="project-showcase">
          <div className="project-list">
            {projects.map((project, index) => (
              <button
                className={`project-row ${activeProject === index ? 'active' : ''}`}
                key={project.title}
                onMouseEnter={() => setActiveProject(index)}
                onClick={() => setActiveProject(index)}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-name">{project.title}</span>
                <span className="project-type">{project.type}</span>
                <ArrowUpRight className="project-arrow" size={20} />
              </button>
            ))}
          </div>
          <article className={`project-card ${projects[activeProject].className}`}>
            <div className="card-art">
              {activeProject === 0 ? (
                <div className="flow-window">
                  <div className="window-top"><span /><span /><span /><small>FlowRec Studio</small></div>
                  <div className="window-body"><div className="window-sidebar" /><div className="window-preview"><i /> <strong>60</strong><small>FPS ENGINE</small></div></div>
                </div>
              ) : (
                <div className="motion-canvas"><div className="motion-dot" /><div className="motion-line line-a" /><div className="motion-line line-b" /><span>MOVE WITH INTENT</span></div>
              )}
            </div>
            <div className="project-detail">
              <div><h3>{projects[activeProject].title}</h3><p>{projects[activeProject].description}</p></div>
              <div className="tag-list">{projects[activeProject].tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href={projects[activeProject].href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={17} /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="section-heading">
          <p className="section-kicker">A little context <span>03</span></p>
          <h2>Part engineer,<br /><em>part observer.</em></h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">As the founder of FlowRec, I&apos;m building tools that make space for people to do their best work.</p>
          <p>I care about the intersection of thoughtful design and solid engineering — the invisible systems, the responsive details, and the confidence that comes from software that simply works.</p>
          <div className="about-facts"><div><strong>01</strong><span>Stay curious</span></div><div><strong>02</strong><span>Make it clear</span></div><div><strong>03</strong><span>Ship the work</span></div></div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <p className="section-kicker">Start a conversation <span>04</span></p>
        <h2>Have a good idea?<br /><em>Let&apos;s make it real.</em></h2>
        <a className="contact-link" href="mailto:tejaskumarsingh31march@gmail.com">tejaskumarsingh31march@gmail.com <ArrowUpRight size={22} /></a>
      </section>

      <footer className="footer">
        <span>© 2026 Tejas Singh</span>
        <span>Built with intent, React &amp; Vite</span>
        <div className="socials"><a href="https://github.com/Tejas-singh-31" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a><a href="mailto:tejaskumarsingh31march@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></div>
      </footer>
    </main>
  )
}

export default App

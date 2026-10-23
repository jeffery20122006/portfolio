import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Sparkles, Zap } from 'lucide-react'
import { useEffect } from 'react'
import ActionLink from './components/ActionLink'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectCard from './components/ProjectCard'
import SkillGallery from './components/SkillGallery'
import SectionHeading from './components/SectionHeading'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { projects } from './data/projects'
import './App.css'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section:not(.hero)')

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    sections.forEach((section) => section.setAttribute('data-reveal', ''))
    document.documentElement.classList.add('reveal-ready')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])

  return (
    <div className="site-shell" id="top">
      <div className="page-grain" aria-hidden="true" />
      <SiteHeader />

      <main>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-greeting"><span className="status-dot" /> HEY, I'M</p>
            <div className="hero-title-wrap">
              <svg className="heading-arrow" viewBox="0 0 92 68" fill="none" aria-hidden="true">
                <path d="M4 7C38 8 57 23 68 53m0 0-18-11m18 11 8-19" />
              </svg>
              <h1 id="hero-title">JEFFERY<span className="hero-underline" /></h1>
            </div>
            <p className="hero-subtitle">Software Developer <span>•</span> Full-Stack Developer <span>•</span> Python Enthusiast</p>
            <p className="hero-intro">I turn ideas into practical digital experiences through code, creative problem-solving, and AI-powered technology.</p>
            <div className="hero-actions">
              <ActionLink href="#projects" variant="lime">Explore My Work <ArrowDownRight size={17} /></ActionLink>
              <a className="text-link" href="#contact">Let's Connect <ArrowUpRight size={15} /></a>
            </div>
          </div>

          <div className="hero-art" role="img" aria-label="A playful illustration of a student developer working at a laptop">
            <span className="hero-edge-shape hero-edge-shape-one" aria-hidden="true" />
            <span className="hero-edge-shape hero-edge-shape-two" aria-hidden="true" />
            <span className="orbit orbit-one" aria-hidden="true" />
            <span className="orbit orbit-two" aria-hidden="true" />
            <Sparkles className="doodle doodle-spark" aria-hidden="true" />
            <Zap className="doodle doodle-zap" aria-hidden="true" />
            <span className="doodle doodle-star" aria-hidden="true">✳</span>
            <span className="code-float code-float-one" aria-hidden="true">&lt;/&gt;</span>
            <span className="code-float code-float-two" aria-hidden="true">{'{ }'}</span>
            <div className="speech-note">LET'S BUILD<br />SOMETHING COOL! <ArrowRight size={16} /></div>
            <div className="developer-scene" aria-hidden="true">
              <div className="scene-shadow" />
              <div className="character-body">
                <div className="character-neck" />
                <div className="character-face">
                  <span className="hair hair-a" /><span className="hair hair-b" /><span className="hair hair-c" />
                  <span className="eye eye-left" /><span className="eye eye-right" />
                  <span className="cheek cheek-left" /><span className="cheek cheek-right" />
                  <span className="smile" />
                </div>
                <div className="character-shirt"><span className="shirt-mark">&lt;/&gt;</span></div>
                <span className="character-arm" />
              </div>
              <div className="laptop"><div className="laptop-screen"><Code2 size={30} /><span>making<br />something</span><i>...</i></div><div className="laptop-base" /></div>
            </div>
            <div className="cgpa-sticker"><span className="sticker-spark">✳</span><span className="sticker-label">CGPA</span><strong>9.3<span>/10</span></strong><span className="sticker-caption">curious by nature</span></div>
            <span className="hand-arrow" aria-hidden="true">↗</span>
          </div>
          <a className="hero-footnote" href="#projects"><span>SCROLL TO EXPLORE</span><span className="footnote-line" /><ArrowDown size={14} /></a>
        </section>

        <section className="intro-band" aria-label="A quick introduction">
          <div className="intro-band-inner">
            <span>LEARNING LOUDLY</span><span className="band-star">✳</span>
            <p>Computer science, with a human side.</p><span className="band-star">✳</span>
            <span>BUILDING THOUGHTFULLY</span>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="projects-heading">
            <SectionHeading index="01 / SELECTED IDEAS" title={<>THINGS I'VE BEEN<br /><span>BUILDING</span></>} id="projects-title" />
            <p>Experiments, ideas, and projects turning code into something useful.</p>
          </div>
          <div className="featured-project">
            <ProjectCard project={projects[0]} featured />
          </div>
          <div className="project-grid" aria-label="More project concepts">
            {projects.slice(1).map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        <AboutSection />

        <SkillGallery />

        <ExperienceSection />

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App

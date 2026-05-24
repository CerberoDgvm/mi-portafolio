import './index.css'
import { useState, useEffect } from 'react'
import Navbar   from './components/Navbar'
import Cursor   from './components/Cursor'
import Hero     from './components/Hero'
import About    from './components/About'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import ZigZag   from './components/Zigzag'

const SECTIONS = ['inicio', 'sobre-mi', 'proyectos', 'contacto']

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  // scrollTo definida aquí para compartirla con Navbar y Hero
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Scroll spy — detecta qué sección está visible
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = SECTIONS.find(s => s === e.target.id)
          if (id) setActiveSection(id)
        }
      })
    }, { threshold: 0.35 })

    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  return (
    <div>
      <Cursor />

      {/* Pasamos las dos props que Navbar necesita */}
      <Navbar scrollTo={scrollTo} activeSection={activeSection} />

      <Hero />
      <ZigZag />
      <About />
      <ZigZag flip />
      <Projects />
      <ZigZag />
      <Contact />

      <footer className="footer">
        © 2025 <strong>Victor Dorado</strong> — Hecho con ♥ y demasiados cartoons
      </footer>
    </div>
  )
}

export default App
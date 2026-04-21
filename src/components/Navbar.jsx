// components/Navbar.jsx
// ─────────────────────────────────────────
// Barra de navegación fija.
//
// Dos cosas importantes:
// 1. scrollTo() → hace scroll suave a la sección
// 2. activeSection → resalta el link de la sección
//    visible usando IntersectionObserver
// ─────────────────────────────────────────

import { useState, useEffect } from 'react'

// Lista de secciones en orden
const SECTIONS = ['inicio', 'sobre-mi', 'proyectos', 'contacto']
const LABELS   = ['Inicio', 'Sobre mí', 'Proyectos', 'Contacto']

function Navbar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    // IntersectionObserver detecta qué sección está en pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.indexOf(entry.target.id)
            if (idx > -1) setActive(idx)
          }
        })
      },
      { threshold: 0.35 } // se activa cuando el 35% de la sección es visible
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Scroll suave al hacer clic en un link
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      {/* Logo — clic lleva al inicio */}
      <div className="nav-logo" onClick={() => scrollTo('inicio')}>
        V.<em>D</em>
      </div>

      {/* Links de navegación */}
      <ul className="nav-links">
        {LABELS.map((label, i) => (
          <li key={label}>
            <a
              href="#"
              // Si es la sección activa, añade la clase 'active'
              className={active === i ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault() // evita que el # cambie la URL
                scrollTo(SECTIONS[i])
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
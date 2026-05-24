import { useState } from 'react'

function Navbar({ activeSection, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Inicio',    id: 'inicio' },
    { label: 'Sobre mí', id: 'sobre-mi' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Contacto',  id: 'contacto' },
  ]

  const handleClick = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-logo" onClick={() => handleClick('inicio')}>
          V.<em>D</em>
        </div>

        {/* Links normales — solo visibles en desktop */}
        <ul className="nav-links nav-links--desktop">
          {links.map(l => (
            <li key={l.id}>
              <a
                href="#"
                className={activeSection === l.id ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleClick(l.id) }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa — solo visible en móvil */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`ham-line ${menuOpen ? 'ham-line--open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'ham-line--open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'ham-line--open' : ''}`} />
        </button>
      </nav>

      {/* Menú móvil — aparece debajo del nav cuando está abierto */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(l => (
            <a
              key={l.id}
              href="#"
              className={`nav-mobile-link ${activeSection === l.id ? 'active' : ''}`}
              onClick={e => { e.preventDefault(); handleClick(l.id) }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar
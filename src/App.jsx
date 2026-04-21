// App.jsx
// ─────────────────────────────────────────
// Componente raíz. Solo importa los otros
// componentes y los ordena en la página.
// También importa el CSS global.
// ─────────────────────────────────────────

import './index.css'
import Navbar    from './components/Navbar'
import Cursor    from './components/Cursor'
import Hero      from './components/Hero'
import About     from './components/About'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import ZigZag    from './components/ZigZag'

function App() {
  return (
    <div>
      {/* El cursor personalizado flota sobre todo */}
      <Cursor />

      {/* Navbar fija en la parte superior */}
      <Navbar />

      {/* Secciones en orden con divisores entre ellas */}
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
// components/About.jsx
// ─────────────────────────────────────────
// Sección "Sobre mí".
// Dos columnas: texto a la izquierda,
// tarjetas de habilidades a la derecha.
// ─────────────────────────────────────────

// Lista de tecnologías/habilidades
const SKILLS = [
  'React', 'JavaScript', 'CSS', 'HTML',
  'Unity', 'C#', 'Node.js', 'Git', 'Figma', 'Illustración',
]

// Tarjetas de la columna derecha
const CARDS = [
  {
    icon: '🎮',
    title: 'Game Dev en Unity',
    text: 'Juegos 2D con físicas personalizadas, arte propio y diseño de niveles pensado para ser jugado — no solo terminado.',
  },
  {
    icon: '✏️',
    title: 'Rubberhose Illustration',
    text: 'Influenciado por Fleischer Studios y el cartoonismo clásico. Ilustración como herramienta para dar personalidad a proyectos digitales.',
  },
  {
    icon: '⚙️',
    title: 'Full Stack Dev',
    text: 'React en el front, Node en el back, Git para no perder la cabeza. Código limpio y arquitecturas que tienen sentido.',
  },
]

function About() {
  return (
    <section id="sobre-mi" className="wrap">

      {/* Etiqueta roja pequeña */}
      <div className="sec-label">Sobre mí</div>

      {/* Título de sección — <em> aplica el color rojo + itálica */}
      <h2 className="sec-title">
        Dev que dibuja.<br />
        <em>Ilustrador</em> que codea.
      </h2>

      <div className="about-grid">

        {/* ── COLUMNA IZQUIERDA: texto ── */}
        <div className="about-text">
          <p>
            Soy <strong>ingeniero de sistemas</strong> y desarrollador full stack.
            Me interesa que cada proyecto no solo funcione, sino que esté{' '}
            <strong>diseñado con intención.</strong>
          </p>
          <p>
            Fuera del código soy ilustrador amateur con obsesión por el{' '}
            <strong>estilo rubberhose</strong> — esas formas orgánicas, líneas
            gruesas y energía del cartoonismo clásico de los años 30. Esa mezcla
            técnica + visual define todo lo que hago.
          </p>
          <p>
            También desarrollo juegos 2D en <strong>Unity</strong>: me apasiona
            el diseño de mecánicas y construir mundos pequeños pero completos.
          </p>

          {/* Chips de habilidades
              El hover tiene un spring muy exagerado (.34,2,.64,1)
              — el número >1 causa "overshoot" (rebota más allá y vuelve) */}
          <div className="chips">
            {SKILLS.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── COLUMNA DERECHA: tarjetas ── */}
        <div>
          {CARDS.map((card) => (
            <div key={card.title} className="acard">
              <h3>{card.icon} {card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
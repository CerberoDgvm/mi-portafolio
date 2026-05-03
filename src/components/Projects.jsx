// components/Projects.jsx
// ─────────────────────────────────────────
// Sección de proyectos con tarjetas.
//
// Para agregar un proyecto nuevo:
// añade un objeto al array PROJECTS con:
//   emoji     → ícono representativo
//   barColor  → color de la barra superior (rojo, ámbar o negro)
//   title     → nombre del proyecto
//   desc      → descripción corta
//   tags      → array de tecnologías usadas
//   link      → URL del proyecto o repositorio
// ─────────────────────────────────────────

const PROJECTS = [
  {
    emoji: '🧮',
    barColor: '#C8341A', // rojo
    title: 'Calculadora React',
    desc: 'Primera app funcional en React. Manejo de estado con hooks y lógica de operaciones.',
    tags: ['React', 'Hooks', 'CSS'],
    link: '#',
  },
  {
    emoji: "🎯", 
    barColor: "#D4961C",
    title: "Habit Tracker",
    desc: "App de seguimiento de hábitos con estadísticas, racha de días y vistas diaria, semanal y mensual.",
    tags: ["React","localStorage","CSS"], 
    link: "https://habittracker-victor.vercel.app" 
  },
  {
    emoji: '🌐',
    barColor: '#181410', // negro
    title: 'Portafolio Web',
    desc: 'Este portafolio — diseñado y construido desde cero con React, identidad visual rubberhose.',
    tags: ['React', 'CSS', 'Vite'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="proyectos" className="wrap">

      <div className="sec-label">Proyectos</div>
      <h2 className="sec-title">
        Lo que he<br />
        <em>construido.</em>
      </h2>

      {/* Grid de tarjetas — auto-fill las acomoda automáticamente */}
      <div className="proj-grid">
        {PROJECTS.map((project, index) => (
          <div key={index} className="pcard">

            {/* Parte superior: thumbnail con emoji animado */}
            <div className="pthumb">
              {/* Barra de color (rojo / ámbar / negro) */}
              <div
                className="pthumb-bar"
                style={{ background: project.barColor }}
              />
              {/* El emoji flota con la animación rubberFloat */}
              <span className="pthumb-emoji">{project.emoji}</span>
            </div>

            {/* Cuerpo de la tarjeta */}
            <div className="pbody">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {/* Etiquetas de tecnologías */}
              <div className="ptags">
                {project.tags.map((tag) => (
                  <span key={tag} className="ptag">{tag}</span>
                ))}
              </div>

              {/* Link al proyecto */}
              <a href={project.link} className="plink">
                Ver proyecto →
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects
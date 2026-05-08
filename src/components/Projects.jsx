import { useState } from 'react'
import { createPortal } from 'react-dom'
import Calculator from './Calculator'

const PROJECTS = [
  { 
    emoji: "🧮", 
    barColor: "#C8341A",
    title: "Calculadora React",
    desc: "App funcional en React. Manejo de estado con hooks, lógica de operaciones y diseño propio.",
    tags: ["React","Hooks","CSS"], 
    modal: true
  },
  { 
    emoji: "🎯", 
    barColor: "#D4961C",
    title: "Habit Tracker",
    desc: "App de seguimiento de hábitos con estadísticas, racha de días y vistas diaria, semanal y mensual.",
    tags: ["React","localStorage","CSS"], 
    link: "https://habittracker-victor.vercel.app",
    modal: false
  },
  { 
    emoji: "🌐", 
    barColor: "#181410",
    title: "Portafolio Web",
    desc: "Este portafolio — diseñado y construido desde cero con React, identidad visual rubberhose.",
    tags: ["React","CSS","Vite"], 
    link: "https://victordorado.vercel.app",
    modal: false
  },
]

function Projects() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="proyectos" className="wrap">
      <div className="sec-label">Proyectos</div>
      <h2 className="sec-title">Lo que he<br/><em>construido.</em></h2>

      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <div key={i} className="pcard">
            <div className="pthumb" style={{ background: 'var(--lgray)' }}>
              <div className="pthumb-bar" style={{ background: p.barColor }}/>
              <span className="pthumb-emoji">{p.emoji}</span>
            </div>
            <div className="pbody">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="ptags">
                {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
              </div>
              {p.modal ? (
                <button
                  className="plink"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => setModalOpen(true)}
                >
                  Ver proyecto →
                </button>
              ) : (
                <a href={p.link} className="plink" target="_blank" rel="noreferrer">
                  Ver proyecto →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      
      {modalOpen && createPortal(
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Calculadora React</h3>
              <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
            </div>
            <Calculator />
          </div>
        </div>,
        document.body
      )}

    </section>
  )
}

export default Projects
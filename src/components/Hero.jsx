// components/Hero.jsx
// ─────────────────────────────────────────
// Sección principal — lo primero que ve el usuario.
// Contiene: texto de presentación + ilustración animada.
// ─────────────────────────────────────────

import HeroIllo from './HeroIllo'

function Hero() {
  // Scroll suave al hacer clic en los botones
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    // id="inicio" → permite al navbar encontrar esta sección
    <div id="inicio">
      <div className="hero">

        {/* ── TEXTO ── */}
        <div className="hero-left">

          {/* Etiqueta pequeña con animación de entrada (.au = fadeUp) */}
          <div className="hero-eyebrow au">
            Ingeniero de Sistemas · Full Stack Dev
          </div>

          {/* Nombre: "Victor" en outline, "Dorado" en rojo itálico */}
          <h1 className="hero-name au au1">
            <span className="outline">Victor</span>
            <br />
            <span className="italic">Dorado</span>
          </h1>

          {/* Línea decorativa animada (crece desde la izquierda) */}
          <div className="hero-rule" />

          <p className="hero-desc au au3">
            Construyo soluciones digitales que funcionan de verdad y destacan visualmente. Código sólido, experiencias interactivas y una identidad visual con carácter.
          </p>

          {/* Botones de llamada a acción */}
          <div className="hero-cta au au4">
            <button className="btn btn-solid" onClick={() => scrollTo('proyectos')}>
              Proyectos →
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('contacto')}>
              Contacto
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('descargar CV')}>
              Descargar CV
            </button>
          </div>
        </div>

        {/* ── ILUSTRACIÓN ── */}
        <div className="hero-right">
          <div className="illo-stage">

            {/* Círculo de fondo con líneas de velocidad */}
            <div className="illo-frame" />

            {/* Anillo exterior que gira con estrellitas */}
            <div className="illo-ring" />

            {/* Estrellas decorativas */}
            <div className="deco d1">★</div>
            <div className="deco d2">✦</div>

            {/* Burbuja de diálogo */}
            <div className="bubble">¡Hola!, soy yo Victor 👋</div>
          
            <HeroIllo />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
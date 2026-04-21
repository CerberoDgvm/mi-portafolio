import HeroIllo from './Heroillo'

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="inicio">
      <div className="hero">

        <div className="hero-left">
          <div className="hero-eyebrow au">
            Ingeniero de Sistemas · Full Stack Dev
          </div>

          <h1 className="hero-name au au1">
            <span className="outline">Victor</span>
            <br />
            <span className="italic">Dorado</span>
          </h1>

          <div className="hero-rule" />

          <p className="hero-desc au au3">
            Construyo soluciones digitales que funcionan de verdad y destacan
            visualmente. Código sólido, experiencias interactivas y una
            identidad visual con carácter.
          </p>

          <div className="hero-cta au au4">
            <button className="btn btn-solid" onClick={() => scrollTo('proyectos')}>
              Proyectos →
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('contacto')}>
              Contacto
            </button>
            
              
            <a href="/cv-victor-dorado.pdf"
              download="CV-Victor-Dorado.pdf"
              className="btn btn-ghost">
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="illo-stage">
            <div className="illo-frame" />
            <div className="illo-ring" />
            <div className="deco d1">★</div>
            <div className="deco d2">✦</div>
            <div className="bubble">¡Hola!, soy yo Victor 👋</div>
            <HeroIllo />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
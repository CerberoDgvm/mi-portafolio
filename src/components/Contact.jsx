// Contact.jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'
 
function Contact() {
 
  // Guarda los valores de cada campo del formulario
  const [form, setForm] = useState({
    nombre:  '',
    email:   '',
    mensaje: ''
  })
 
  // sent     → muestra mensaje de éxito en lugar del form
  // loading  → deshabilita el botón mientras envía (evita doble envío)
  // error    → muestra mensaje si la validación falla
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
 
  // Actualiza solo el campo que cambió.
  // [e.target.name] usa el atributo name del input como clave.
  // ...form conserva los demás campos intactos.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
 
  const handleSubmit = () => {
 
    // ── VALIDACIÓN ──
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setError('Por favor llena todos los campos.')
      return
    }
    if (!form.email.includes('@') || !form.email.includes('.')) {
      setError('Ingresa un email válido.')
      return
    }
 
    setError('')
    setLoading(true)
 
    // ── ENVÍO ──
    // import.meta.env.VITE_* lee las variables del archivo .env
    // Los nombres from_name, from_email, message deben coincidir
    // exactamente con los {{variables}} de tu template en EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name:  form.nombre,
        from_email: form.email,
        message:    form.mensaje,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSent(true)
      setLoading(false)
    })
    .catch(() => {
      setError('Algo salió mal. Escríbeme directo al correo.')
      setLoading(false)
    })
  }
 
  return (
    <section id="contacto" className="wrap">
 
      {/* Etiqueta roja superior */}
      <div className="sec-label">Contacto</div>
 
      <div className="contact-grid">
 
        {/* ── COLUMNA IZQUIERDA ── */}
        <div>
          <h2 className="contact-big">
            ¿Tienes<br/>
            un <em>proyecto</em><br/>
            en mente?
          </h2>
 
          <p className="contact-sub">
            Desarrollo web, apps, o algo que mezcle código
            con ilustración — hablemos.
          </p>
 
          {/* slink y sicon son clases del index.css */}
          <a href="mailto:victordorado79@gmail.com" className="slink">
            <span className="sicon">✉️</span>
            victordorado79@gmail.com
          </a>
          <a href="https://github.com/CerberoDgvm" className="slink" target="_blank" rel="noreferrer">
            <span className="sicon">🐙</span>
            github.com/CerberoDgvm
          </a>
          <a href="https://www.linkedin.com/in/victor-dorado17/" className="slink" target="_blank" rel="noreferrer">
            <span className="sicon">💼</span>
            linkedin.com/in/victorDorado17
          </a>
        </div>
 
        {/* ── COLUMNA DERECHA ── */}
        <div>
          {sent ? (
 
            // Se muestra cuando el envío fue exitoso
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '16px' }}>
                🎉
              </span>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '8px'
              }}>
                ¡Mensaje enviado!
              </p>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
                Te respondo pronto.
              </p>
            </div>
 
          ) : (
 
            <>
              {/* rh-field es la clase del CSS para los inputs */}
              <input
                className="rh-field"
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
              />
              <input
                className="rh-field"
                name="email"
                type="email"
                placeholder="Tu email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                className="rh-field"
                name="mensaje"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                value={form.mensaje}
                onChange={handleChange}
              />
 
              {/* Solo aparece si error tiene contenido */}
              {error && (
                <p style={{
                  color: 'var(--red)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  marginBottom: '10px'
                }}>
                  {error}
                </p>
              )}
 
              {/* btn y btn-solid vienen del index.css
                  Los dos inline styles solo manejan el estado loading */}
              <button
                className="btn btn-solid"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: loading ? 0.6 : 1,
                  cursor:  loading ? 'not-allowed' : 'pointer'
                }}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar mensaje →'}
              </button>
            </>
          )}
        </div>
 
      </div>
    </section>
  )
}
 
export default Contact
 
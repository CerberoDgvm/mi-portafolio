// components/Cursor.jsx
// ─────────────────────────────────────────
// Cursor personalizado con forma de guante.
//
// Cómo funciona:
// 1. Escuchamos el movimiento del ratón con
//    window.addEventListener('mousemove')
// 2. Guardamos la posición en un estado (x, y)
// 3. Detectamos si el ratón está sobre un
//    elemento interactivo para agrandar el cursor
// ─────────────────────────────────────────

import { useState, useEffect } from 'react'

function Cursor() {
  // Estado: posición del cursor y si está en modo "grande"
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [big, setBig] = useState(false)

  useEffect(() => {
    // Actualiza la posición en cada movimiento del ratón
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })

    // Detecta si el elemento debajo del cursor es interactivo
    const onOver = (e) => {
      const isInteractive = e.target.closest(
        'a, button, .btn, .chip, .pcard, .slink, .nav-logo'
      )
      if (isInteractive) setBig(true)
    }

    const onOut = () => setBig(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    // Limpieza: removemos los listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, []) // [] significa: ejecuta esto solo una vez al montar

  return (
    // La clase 'big' activa los estilos del estado hover en el CSS
    <div
      className={`cursor${big ? ' big' : ''}`}
      style={{ left: pos.x, top: pos.y }}
    >
      <div className="cursor-inner" />
    </div>
  )
}

export default Cursor
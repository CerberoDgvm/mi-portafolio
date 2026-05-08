import { useState } from "react"

// Reemplaza eval() con una función propia
// eval() es inseguro — puede ejecutar cualquier código JavaScript
// Esta función solo acepta números y operadores válidos
function calcular(expresion) {
  // Reemplazamos * y / por operadores seguros
  // Solo permite números, operadores y punto decimal
  const soloCaracteresValidos = /^[0-9+\-*/.]+$/.test(expresion)
  if (!soloCaracteresValidos) return "Error"

  try {
    // Function() es más seguro que eval() — no tiene acceso al scope
    return new Function('return ' + expresion)().toString()
  } catch {
    return "Error"
  }
}

function Calculator() {
  const [input,    setInput]    = useState("")
  const [resultado, setResultado] = useState("")

  const handleClick = (value) => {
    // Evita doble operador al inicio
    if (["+","-","*","/"].includes(value) && input === "") return
    setInput(prev => prev + value)
  }

  const calculate = () => {
    if (!input) return
    const res = calcular(input)
    setResultado(res)
    setInput(res === "Error" ? "" : res)
  }

  const clear = () => {
    setInput("")
    setResultado("")
  }

  const backspace = () => {
    setInput(prev => prev.slice(0, -1))
  }

  const BUTTONS = [
    { label: "C",   action: clear,              span: 2, type: "danger" },
    { label: "⌫",   action: backspace,           span: 1, type: "op" },
    { label: "/",   action: () => handleClick("/"), span: 1, type: "op" },
    { label: "7",   action: () => handleClick("7"), span: 1, type: "num" },
    { label: "8",   action: () => handleClick("8"), span: 1, type: "num" },
    { label: "9",   action: () => handleClick("9"), span: 1, type: "num" },
    { label: "*",   action: () => handleClick("*"), span: 1, type: "op" },
    { label: "4",   action: () => handleClick("4"), span: 1, type: "num" },
    { label: "5",   action: () => handleClick("5"), span: 1, type: "num" },
    { label: "6",   action: () => handleClick("6"), span: 1, type: "num" },
    { label: "-",   action: () => handleClick("-"), span: 1, type: "op" },
    { label: "1",   action: () => handleClick("1"), span: 1, type: "num" },
    { label: "2",   action: () => handleClick("2"), span: 1, type: "num" },
    { label: "3",   action: () => handleClick("3"), span: 1, type: "num" },
    { label: "+",   action: () => handleClick("+"), span: 1, type: "op" },
    { label: "0",   action: () => handleClick("0"), span: 2, type: "num" },
    { label: ".",   action: () => handleClick("."), span: 1, type: "num" },
    { label: "=",   action: calculate,             span: 1, type: "equal" },
  ]

  return (
    <div className="calc-wrap">

      {/* Pantalla */}
      <div className="calc-screen">
        <span className="calc-history">{resultado && `= ${resultado}`}</span>
        <span className="calc-input">{input || "0"}</span>
      </div>

      {/* Botones */}
      <div className="calc-grid">
        {BUTTONS.map((btn, i) => (
          <button
            key={i}
            className={`calc-btn calc-btn--${btn.type}`}
            style={{ gridColumn: btn.span > 1 ? `span ${btn.span}` : undefined }}
            onClick={btn.action}
          >
            {btn.label}
          </button>
        ))}
      </div>

    </div>
  )
}

export default Calculator
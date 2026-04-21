import { useState } from "react"

function Calculator() {
  const [input, setInput] = useState("")

  const handleClick = (value) => {
    setInput(input + value)
  }

  const calculate = () => {
    try {
      setInput(eval(input).toString())
    } catch {
      setInput("Error")
    }
  }

  const clear = () => {
    setInput("")
  }

  return (
    <div style={{
      background: "#1e1e1e",
      padding: "30px",
      borderRadius: "12px",
      width: "300px",
      margin: "0 auto"
    }}>
      <input
        value={input}
        readOnly
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "1.5rem",
          marginBottom: "20px",
          textAlign: "right"
        }}
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px"
      }}>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","="].map((btn) => (
          <button
            key={btn}
            onClick={() => btn === "=" ? calculate() : handleClick(btn)}
            style={{
              padding: "15px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {btn}
          </button>
        ))}

        <button
          onClick={clear}
          style={{
            gridColumn: "span 4",
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default Calculator
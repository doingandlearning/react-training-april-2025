import { useState } from "react"

export default function Dice() {
  const [value, setValue] = useState(0)

  function roll() {
    setValue(Math.floor(Math.random() * 20) + 1)
  }

  return <>
    <h1>{value}</h1>

    {value === 1 && <h2>Critical Failure</h2>}
    {value === 20 && <h2>Critical Hit</h2>}

    <button onClick={roll}>Roll</button>
  </>


}
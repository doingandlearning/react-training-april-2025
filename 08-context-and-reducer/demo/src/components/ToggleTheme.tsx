import { useContext } from "react"
import { useTheme } from "../context/ThemeContext"

export function ThemeToggle() {
  const { toggleTheme } = useTheme()
  return (
    <>

      <button onClick={toggleTheme}>Toggle</button>
    </>
  )
}
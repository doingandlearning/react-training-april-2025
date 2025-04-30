import { useTheme } from "../context/ThemeContext";
import "./Box.css"
export default function Box() {
  const { theme } = useTheme()

  return <div className={`${theme}-box box`}></div>
}
import { useRef, useState, useEffect } from "react"

export default function Ref({ data }) {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")
  const [search, setSearch] = useState("")
  const prevCount = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(data)
  const timerRef = useRef()

  function handleCount() {
    const newValue = count + Math.floor(Math.random() * 5 + 1)
    prevCount.current = count
    setCount(newValue)
  }

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [inputRef])

  function handleChange(e) {
    setInput(e.target.value)
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = window.setTimeout(() => {
      setSearch(input)
    }, 5000)
  }

  return <>
    <button onClick={handleCount}>Make number go up</button>
    <p>Count: {count}</p>
    <p>Previous: {prevCount.current}</p>
    <input ref={inputRef} value={input} onChange={handleChange} />
    {search}
  </>

}
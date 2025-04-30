import { useEffect, useState } from "react"


function hello() { }

let renderCount = 0
export default function Effect() {
  // componentDidMount 
  // componentDidUpdate 
  // componentDidUnmount
  const [count, setCount] = useState(0)
  const [double, setDouble] = useState("");

  console.log(`rendered ${renderCount++} times`)
  useEffect(() => {
    async function fetchData() {
      await new Promise((res) => setTimeout(res, 1000))
      setDouble("Data Loads")
    }
    fetchData()
  }, [])
  // empty dependency array just on first render
  // 

  useEffect(() => {
    const timer = setInterval(() => console.log("Hello!"), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <>
    <p onClick={() => setCount(count + 1)}>It's working!</p>
    <p>Single: {count}</p>
    <p>Double: {double}</p>
  </>
}
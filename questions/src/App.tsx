import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleChange() {
    setCount(prev => prev + 1)  // 0 + 1
    setCount(prev => prev + 1)  // 1 + 1
    setCount(prev => prev + 1)  // 2 + 1
    setCount(prev => prev + 1)  // 3 + 1

    setTimeout(() => setCount(prev => prev + 1), 1000) // setCount(1)
  }

  return (
    <>
      <button onClick={handleChange}>Add</button>
      <p>
        State variable: {count}
      </p>
      <p>

      </p>
    </>
  )
}

export default App

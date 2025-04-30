import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskProgress } from './components/TaskProgress'

function App() {
  const [count, setCount] = useState(0)

  return <TaskProgress />
}

export default App

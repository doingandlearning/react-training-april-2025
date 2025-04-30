import { useState } from 'react'
import './App.css'
import Effect from "./components/Effect"
import Ref from "./components/Ref"
function App() {
  const data = "Hi!"
  return (
    <>
      <Ref data={data} />
    </>
  )
}

export default App

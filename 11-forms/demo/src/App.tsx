import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [food, setFood] = useState("")
  const [lang, setLang] = useState("")
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault() // To stop the page refresh!
    setErrors({})
    console.log(e.target)
    const formData = {
      name,
      food,
      lang
    }
    // Validation errors!
    console.log(formData)
    setErrors({ name: "We don't like that name." })

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
          {errors.name && <p>Something went wrong with the name. {errors.name}</p>}
        </div>
        <div>
          <label>
            Favourite food
            <textarea value={food} onChange={e => setFood(e.target.value)}></textarea>
            {errors.food && <p>Something went wrong with the food!</p>}
          </label>
        </div>
        <div>
          <label htmlFor='favLang'></label>
          <select id="favLang" name="favourite_language" value={lang} onChange={e => setLang(e.target.value)}>
            <option value="js">JavaScript</option>
            <option value="ts">TypeScript</option>
            <option value="csharp">C#</option>
            <option value="java">Java</option>
            <option value="perl">Perl</option>
            <option value="php">PHP</option>
          </select>
        </div>
        <button>Submit</button>
      </form >
    </>
  )
}

export default App

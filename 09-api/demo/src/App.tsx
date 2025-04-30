import './App.css'
import { useFetch } from './hook/useFetch'


function App() {
  const { loading, error, data } = useFetch("https://api.github.com/users/bob")

  if (loading) {
    return <p>Loading .... </p>
  }

  if (error) {
    return <p>Something went wrong: {error}</p>
  }

  return (
    <>
      {data.name} lives in {data.location}
    </>
  )
}

export default App

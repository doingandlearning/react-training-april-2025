import './App.css'
import React from "react";
import ProductList from './components/ProductList.tsx';
import AddProductForm from './components/AddProductForm.tsx';
import { useDispatch } from 'react-redux';
import Generator from './components/Generator.tsx';

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => { fetchAndUpdateState() }, [])

  async function fetchAndUpdateState() {
    try {
      const response = await fetch("https://api.github.com/users")
      if (!response.ok) throw new Error("Something went wrong")
      const data = await response.json()
      data.map(user =>
        dispatch(addProduct(user.login, user.id))
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ProductList />
      <AddProductForm />
    </>
  )
}

export default App

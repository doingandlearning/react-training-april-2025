import './App.css'
import { ThemeToggle } from './components/ToggleTheme'
import Box from './components/Box'
import { useContext, useReducer } from 'react'
import { cartReducer, IItem, IState } from './reducers/cartReducer'
import { faker } from "@faker-js/faker"
import { CartContext, ICartContext } from './context/CartContext'
import Product from './components/Product'
function App() {
  const { state, dispatch } = useContext(CartContext) as ICartContext;

  const addItemToCart = (item: IItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  return (
    <>
      <ThemeToggle />
      <Box />
      {JSON.stringify(state)}
      <h1>Shopping Cart </h1>
      <p>Cart total: £{state.items.reduce((a, c) => a + parseFloat(c.price), 0)}</p>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear cart</button>

      <button onClick={() => addItemToCart({
        id: `${Date.now()}`,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url({ width: 100, height: 100 })
      })}>Add item</button>
      {state.items.map(item => <Product item={item} key={item.id} />)}
    </>
  )
}

export default App

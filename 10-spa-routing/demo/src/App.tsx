import { useState } from 'react'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Blah from './components/Blah'
import About from './components/About'
import AboutBlah from './components/AboutBlah'
import FourOhFour from './components/FourOhFour'
import Products from './components/Products'
import Product from './components/Product'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/blah">Blah</NavLink>
        <NavLink to="/about" end>About</NavLink>
        <NavLink to="/about/blah">About Blah</NavLink>
        <NavLink to="/products">Product</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blah" element={<Blah />}></Route>
        <Route path="/about/" element={<About />}  ></Route>
        <Route path="/about/blah" element={<AboutBlah />} ></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<Product />}></Route>
        <Route path="*" element={<FourOhFour />}></Route>
      </Routes>

      <div>
        <p>This is an amazing website</p>
      </div>
    </>
  )
}

export default App

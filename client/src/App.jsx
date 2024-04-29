import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Collections from './pages/Collections/Collections'
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/Signup'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product/Product'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

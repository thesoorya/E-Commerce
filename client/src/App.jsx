import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Collections from './pages/Collections/Collections'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/collections' element={<Collections />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

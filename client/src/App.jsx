import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Portfolio from './pages/Portfolio'


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/*' element={<Error404/>} />
      </Routes>
    </>
  )
}

export default App

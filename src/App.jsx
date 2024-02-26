import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Header'
import { Home, Contact, ProjectGallery } from './components/Pages'
import MyFooter from './components/Footer'

import './App.css'

function App() {

  return (
    <Router basename={'/react-portfolio-giadaSponzilli'}>
      < MyNavbar />
      <Routes>
        <Route path='./' element={<Home/>}/>
        <Route path='./projectsgallery' element={<ProjectGallery/>}/>
        <Route path='./contact' element={<Contact/>}/>
      </Routes>
      < MyFooter />
    </Router>
  )
}

export default App

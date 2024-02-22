import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Header'
import { Home, Contact, ProjectGallery } from './components/Pages'
import './App.css'
import MyFooter from './components/Footer'

function App() {

  return (
    <Router basename={'/'}>
      < MyNavbar />
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/projectsgallery' element={<ProjectGallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      < MyFooter />
    </Router>
  )
}

export default App

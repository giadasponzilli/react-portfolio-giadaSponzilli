import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Header'
import { Home, Contact, ProjectGallery, Custom404 } from './components/Pages'
import MyFooter from './components/Footer'

import './App.css'

function App() {

  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/react-portfolio-giadaSponzilli/"}
    >
      < MyNavbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/react-portfolio-giadaSponzilli/projectsgallery' element={<ProjectGallery/>}/>
        <Route path='/react-portfolio-giadaSponzilli/contact' element={<Contact/>}/>
        <Route path='/react-portfolio-giadaSponzilli/404' element={<Custom404/>}/>
      </Routes>
      < MyFooter />
    </BrowserRouter>
  )
}

export default App

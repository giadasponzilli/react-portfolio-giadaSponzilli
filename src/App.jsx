import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Header'
import { Home, Contact, ProjectGallery, Custom404 } from './components/Pages'
import MyFooter from './components/Footer'

import './App.css'

function App() {

  return (
    <Router
    basename={import.meta.env.DEV ? '/' : '/react-portfolio-giadaSponzilli/'}
    >
      < MyNavbar />
      <Routes>
        <Route path='/react-portfolio-giadaSponzilli/' element={<Home/>}/>
        <Route path='/react-portfolio-giadaSponzilli/projectsgallery' element={<ProjectGallery/>}/>
        <Route path='/react-portfolio-giadaSponzilli/contact' element={<Contact/>}/>
        <Route path='/react-portfolio-giadaSponzilli/404' element={<Custom404/>}/>
      </Routes>
      < MyFooter />
    </Router>
  )
}

export default App

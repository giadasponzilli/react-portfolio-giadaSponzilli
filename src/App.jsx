import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Header'
import { Home, Contact, ProjectGallery, Custom404 } from './components/Pages'
import MyFooter from './components/Footer'

import './App.css'


function App() {
  return (
    <Router 
    basename={'/react-portfolio-giadaSponzilli/'}
    >
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectsgallery" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<Custom404 />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

// function App() {

//   return (
//     <Router
//     basename={'/react-portfolio-giadaSponzilli/'}
//     >
//       <MyNavbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/projectsgallery' element={<ProjectGallery/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/404' element={<Custom404/>}/>
//       </Routes>
//       < MyFooter />
//     </Router>
//   )
// }

export default App

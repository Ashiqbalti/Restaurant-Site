import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Menu from '../pages/Menu'
import Navbar from '../components/Navbar/Navbar'

const RoutesComponent = () => {
  return (
    <>
    
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/menu'  element={<Menu/>}/>
      </Routes>

    </>
  )
}

export default RoutesComponent
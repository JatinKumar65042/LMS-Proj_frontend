import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import HomeLayout from './Layouts/HomeLayout'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/signup" element={<Signup/>}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer/> */}
      {/* <HomeLayout/> */}
      {/* <HomePage/> */}
    </>
  )
}

export default App;

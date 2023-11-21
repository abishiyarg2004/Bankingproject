import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LoginSignup from './LoginSignup'
import Aboutus from './Aboutus'


const Routing = () => {
  return (
      
    <div>
        <Routes>
            <Route path='/LoginSignup' element={<LoginSignup/>}/>
            <Route path='/Home' element={<Home/>}/>
           <Route path='/Aboutus' element={<Aboutus/>}/>
        </Routes>
    </div>
  )
}

export default Routing


import './App.css';
import React, { useState } from 'react';
import Routing from './HomeandNavi/Routing';
import LoginSignup from './HomeandNavi/LoginSignup';
import { BrowserRouter } from 'react-router-dom';
import Home from './HomeandNavi/Home';
function App() {
  
   const [load,setLoad]=useState(false);
   const change=()=>{
    setLoad(true);
   }
  return (
    <div className='App'>
      {(!load)?(
       <LoginSignup/>
      ):""
       
      }
        <Routing/>
        
        
    </div>

  
    );
}

export default App;

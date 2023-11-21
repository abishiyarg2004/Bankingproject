
import './App.css';
import React from 'react';
import Routing from './HomeandNavi/Routing';
import LoginSignup from './HomeandNavi/LoginSignup';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
       <LoginSignup/>
        <Routing/>
        
        
    </div>

  
    );
}

export default App;

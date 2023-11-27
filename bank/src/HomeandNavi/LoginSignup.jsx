import React from 'react'
import { useState } from 'react'
import { Paper } from '@mui/material';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Switch from '@mui/material/Switch';
import Login from './Login';
import Signup from './Signup';
import './Home.css'
import Routing from './Routing';
import Home from './Home';

const LoginSignup = () => {
    
    
    const [checked,setChecked] =useState(false);
    const handleChange=(event)=>{
        setChecked(event.target.checked);
    }
  return (

    
    <div className='bodyinlog'>
 <h1 style={{marginLeft:"1100px",paddingTop:"40px", color:"white"}}>Welcome to A3Banking Application!</h1>
        <Paper elevation={8} className='Paperinlog' style={{padding: "60px", width:"600px",height:"500px", marginLeft:"1200px" , marginTop:"60px"}}>
 <h2>Login/SignUp to enjoy the features</h2>

 {checked?(
<Chip icon={<FaceIcon />} label="SignUp" color="primary" variant="outlined" />
):(
<Chip icon={<LockOpenIcon/>} label="Login" color="primary" variant="outlined" />
)}
<br></br>

<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>
<br></br>

{checked?(
<Signup></Signup>


):(
<Login />

)}

</Paper>
     
    </div>
    
  )
}

export default LoginSignup

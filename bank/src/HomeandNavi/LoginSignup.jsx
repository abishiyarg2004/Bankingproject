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


const LoginSignup = () => {
    
    
    const [checked,setChecked] =useState(false);
    const handleChange=(event)=>{
        setChecked(event.target.checked);
    }
  return (

    <body className='bodyinlog'>
    <div>
 <h1>Welcome to A3Banking Application!</h1>
        <Paper elevation={8} style={{padding: "100px", width:"500px", marginLeft:"700px" , marginTop:"90px"}}>
 <h3>Login/SignUp to enjoy the features</h3>

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
    </body>
  )
}

export default LoginSignup

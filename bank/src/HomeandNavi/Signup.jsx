import React, { useState } from 'react'
import './Home.css'

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material';
import Home from './Home';

const Signup = () => {

  const [username,setUsername]=useState();
  const [email,setEmail]=useState();
  const [pass,setPass]=useState();
  const navigation=useNavigate();
  const [error,setError] = useState(false);

 
  
 const handleclick=()=>
  {
    
  const hasUppercase = /[A-Z]/.test(pass);
  const hasLowercase = /[a-z]/.test(pass);
  const hasNumber = /\d/.test(pass);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(pass);
   
  const isStrong =
   
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar;

   if(!isStrong){
   
    setError(true);
   }
  

else{

    navigation('/Home')
    alert("Sign up Successful")
}

  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
<div className='Signupback'>    
      <p style={{fontSize:"20px"}}>Sign Up</p>
      <p>
      <TextField id="standard-basic" label="Username" value={username}
      onChange={(event)=> setUsername(event.target.value)} variant="standard" />
      </p>
      
      <p>
      <TextField id="standard-basic" label="Email" 
      value={email}
      onChange={(event)=> setEmail(event.target.value)} variant="standard" />
      </p>

           <p>

           <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={pass}
      onChange={(event)=> setPass(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}

                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>


            {
              (error)? <p style={{color:"red"}}>*should contains a special character,number,uppercase</p> : ''
            }
            </p>

           <Button variant="contained"  onClick={handleclick}>Sign In</Button>
           <p>
       

           </p>
          
    </div>
  )
}

export default Signup
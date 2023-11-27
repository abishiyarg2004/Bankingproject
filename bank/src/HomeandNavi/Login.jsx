
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validpass,setValidpass] =useState("Abi@123");
  const [passerror,setPasserror] =useState(false);
 const navigation = useNavigate();

  const handleLogin = () => {
     
    
    if(password === validpass){
      alert("Login successful!");
      navigation('/Home')
    }
    else{
      setPasserror(true);
      
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 50, maxWidth: 200, marginLeft:'140px' }}>
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

     
           {
              (passerror)? <p style={{color:"red"}}>*incorrect username/password</p> : ''
            }

      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Paper>
  );
};

export default Login;


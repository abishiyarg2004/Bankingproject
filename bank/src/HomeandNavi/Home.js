import { AppBar, Button, Tab,Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './Home.css';
import { useNavigate } from 'react-router-dom'
import Aboutus from './Aboutus';

import { Link, Route, Switch } from 'react-router-dom';
const Home = () => {
    const [val,setVal]=useState('0');

    const navi=useNavigate();
    const navigation=useNavigate();
   
   
  return (
    <>
    
        <AppBar>
            
            <Toolbar className='tool'>
                <Typography style={{fontFamily:"cursive", fontSize:"30px"}}>A3Banking</Typography> &emsp;
                <AccountBalanceIcon style={{fontSize:"30px"}}></AccountBalanceIcon> &emsp;&emsp;
                <Tabs textColor='inherit' value={val}
                onChange={(e,value)=>setVal(value)}
                 indicatorColor='secondary'>
                <Tab label="Home"  sx={{fontSize:"20px" }} onClick={()=>{navi("/home")}}></Tab>
                <Tab label="About Us" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Account Details" sx={{fontSize:"20px" }} ></Tab>
                
                
                </Tabs>
                <Button variant='contained' sx={{marginLeft:"auto", width:"80px", height:"40px"}}  onClick={()=>{navigation("/LoginSignup")}}>Logout</Button>
            </Toolbar>
             
                
           {
            val === 1 ? (
             <Aboutus/>
            ):(
     <p>hello</p>
            )
           }
           

             



                
        <Toolbar className='footer'>
                <Typography variant="body2" align="center" color="white">
        Contact us
      </Typography> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <Typography variant="body2" align="center" color="white">
       Telephome: 767563452
      </Typography> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <Typography variant="body2" align="center" color="white">
        Email: A3banking@example.com
      </Typography>
                </Toolbar>



        </AppBar>
        
        
        
     
    </>
  )
}

export default Home

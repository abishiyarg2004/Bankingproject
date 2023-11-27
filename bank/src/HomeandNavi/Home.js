import { AccordionDetails, AppBar, Button, Tab,Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './Home.css';
import { useNavigate } from 'react-router-dom'
import Aboutus from './Aboutus';

import { Link, Route, Switch } from 'react-router-dom';
import Accountdetails from './Accountdetails';
import Newhome from './Newhome';

import TransactionForm from './Transaction';
import Transactionhistory from './Transactionhistory';
import Latestnews from './Latestnews';
import Review from './Review';
const Home = () => {
    const [val,setVal]=useState('0');

    const navi=useNavigate();
    
   
   
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
                <Tab label="Transaction" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Transaction History" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Account Details" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Review" sx={{fontSize:"20px" }} ></Tab>
                <Tab label="Your points" sx={{fontSize:"20px" }} ></Tab>
                
                
                </Tabs>
                <Button variant='contained' sx={{marginLeft:"auto", width:"80px", height:"40px"}}  onClick={()=>{navi("/LoginSignup")}}>Logout</Button>
            </Toolbar>
             
                
           {
           
            val === 1 ? <Aboutus/> :
            val === 2 ? <TransactionForm/> :
            val === 3 ? <Transactionhistory/> :
            val === 4 ? <Accountdetails/> :
            val === 5 ? <Review/> :
            val === 6 ? <Latestnews/> :
            <Newhome/>

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

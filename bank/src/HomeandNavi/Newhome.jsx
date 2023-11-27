import React, { useState } from 'react'
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import Aboutus from './Aboutus';



const Newhome = () => {

   const [explore,setExplore] =useState(false);

   const onexplore =()=>{
    setExplore(true);
   }

  return (
    <div style={{width:"2100px", height:"785px",backgroundColor:"white", color:"black"}}>
      

      <div
      style={{
        
        backgroundImage: `url("https://uploads-ssl.webflow.com/63c14315b818a31b179512a3/642a5e5a0700e36fe5967a17_open-banking-1200-1662083126.jpg")`,
       
       backgroundRepeat:'no-repeat',
        backgroundSize: '2100px',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container style={{marginBottom:"100px"}}>
        <Grid container spacing={3}>
         
          <Grid item xs={12}>
            <Typography variant="h3"  style={{ color: 'white',backgroundColor:"darkblue",fontFamily:"cursive" }}>
              Welcome to A3Banking
            </Typography>
          </Grid>

         
          <Grid item xs={12}>
            <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Typography variant="h5" gutterBottom>
                We are here to help you manage your finances.
              </Typography>
              
            </Paper>
          </Grid>

          
          <Grid item xs={12}>
            <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Typography variant="h5" gutterBottom>
                Manage Your Accounts
              </Typography>
             
            </Paper>
          </Grid>

         
          <Grid item xs={12}>
            <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Typography variant="h5" gutterBottom>
                check News and Updates
              </Typography>
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>

    </div>
  )
}

export default Newhome

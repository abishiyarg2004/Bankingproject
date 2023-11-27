import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import './Home.css'
const Aboutus = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const showSection = (section) => {
    setVisibleSection(section);
  };

  const renderContent = () => {
    switch (visibleSection) {
      case 'mission':
        return (
          
          <Paper style={{ padding: '20px', textAlign: 'center',marginTop:"60px" }}>
            <br></br>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <br></br>
            <Typography>
              At A3 Banking, our mission is to provide secure and innovative financial solutions to our customers. We are committed to building long-term relationships and ensuring the financial well-being of the communities we serve.
            </Typography>
            <br></br>
          </Paper>
        );
      case 'values':
        return (
          <Paper style={{ padding: '20px', textAlign: 'center',marginTop:"60px" }}>
            <br></br>
            <Typography variant="h5" gutterBottom>
              Our Values
            </Typography>
            <br></br>
            <Typography>
              Integrity, Customer Focus, Innovation, and Community Engagement are the core values that drive everything we do. We believe in transparency, reliability, and putting our customers first.
            </Typography>
            <br></br>
          </Paper>
        );
      case 'Customersatisfaction':
        return (
          <Paper style={{ padding: '20px', textAlign: 'center',marginTop:"60px" }}>
            <br></br>
            <Typography variant="h5" gutterBottom>
            Customer Satisfaction
            </Typography>
            <br></br>
            <Typography>
            Your satisfaction is our priority. We strive to exceed your expectations by providing exceptional service, personalized solutions, and a seamless banking experience.

            </Typography>
            <br></br>
          </Paper>
        );
     
      case 'TechnologyInnovation':
        return (
          <Paper style={{ padding: '20px', textAlign: 'center' , marginTop:"60px"}}>
            <br></br>
            <Typography variant="h5" gutterBottom>
            Technology Innovation
            </Typography>
            <br></br>
            <Typography>
            Explore how we leverage cutting-edge technology to provide secure and convenient banking solutions. Our commitment to innovation ensures that our customers have access to the latest financial tools.

            </Typography>
            <br></br>
          </Paper>
        );
     
      default:
        return null;
    }
  };

  return (
    <div className='aboutusback' style={{width:"2100px", height:"785px",backgroundColor:"white", color:"black"}}>
    
      
    <Container>
      <Typography variant="h4" align="center" gutterBottom style={{marginTop:"100px" , fontFamily:"cursive", color:"white"}}>
        About Our Bank :
       
    
    <br></br>
    <br></br>
   
      </Typography>
      <Button variant="contained" color="primary" onClick={() => showSection('mission')} style={{ marginRight: '10px' }}>
        Our Mission
      </Button>
      <Button variant="contained" color="primary" onClick={() => showSection('values')} style={{ marginRight: '10px' }}>
        Our Values
      </Button>
      <Button variant="contained" color="primary" onClick={() => showSection('Customersatisfaction')} style={{ marginRight: '10px' }}>
      Customer Satisfaction
      </Button>
      <Button variant="contained" color="primary" onClick={() => showSection('TechnologyInnovation')} style={{ marginRight: '10px' }}>
      Technology Innovation
      </Button>
      
      {renderContent()}
    </Container>
   
    </div>
  );
};

export default Aboutus

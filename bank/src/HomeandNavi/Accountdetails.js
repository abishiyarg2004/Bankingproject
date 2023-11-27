import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';


const Accountdetails = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountDetails, setAccountDetails] = useState(null);
  const [error,setError] =useState(false);
  

  const fetchAccountDetails = () => {


    
     if(accountNumber.length === 10){




     setError(false)

    if(accountNumber>=1000000000 && accountNumber<2000000000 ){
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Dhanuu',
      mobileNumber: '9897543210',
      ifscNumber: 'Acfr12345678',
      micr: '909654321',
      accountType: 'Savings',
      balance: '$20,000',
      bankBranchName: 'Thiru Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }
    else if(accountNumber>=2000000000 && accountNumber<3000000000 ){
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Bhur',
      mobileNumber: '9042153421',
      ifscNumber: 'ABC12345678',
      micr: '987654321',
      accountType: 'Savings',
      balance: '$10,000',
      bankBranchName: 'Main Street Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }
   else if(accountNumber>=3000000000 && accountNumber<4000000000 ){
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Abishku',
      mobileNumber: '9876543210',
      ifscNumber: 'GAD18273645',
      micr: '976890345',
      accountType: 'Savings',
      balance: '$50,000',
      bankBranchName: 'Main Street Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }
   else if(accountNumber>=4000000000 && accountNumber<5000000000 ){
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Arun',
      mobileNumber: '9876543210',
      ifscNumber: 'NCC89045658',
      micr: '964897376',
      accountType: 'Savings',
      balance: '$1,000',
      bankBranchName: 'Anna Nagar Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }
   else if(accountNumber>=5000000000 && accountNumber<6000000000 ){
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Acchu',
      mobileNumber: '9042516098',
      ifscNumber: 'RUI58063412',
      micr: '596780243',
      accountType: 'Savings',
      balance: '$18,567',
      bankBranchName: 'Sirkali Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }
   else if(accountNumber>=6000000000 && accountNumber<7000000000 ){
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Acchu',
      mobileNumber: '9042516098',
      ifscNumber: 'RUI58063412',
      micr: '596780243',
      accountType: 'Savings',
      balance: '$18,567',
      bankBranchName: 'Sirkali Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }
   else if(accountNumber>=7000000000 && accountNumber<8000000000 ){
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Amirr',
      mobileNumber: '9789066898',
      ifscNumber: 'AMR89265412',
      micr: '837402571',
      accountType: 'Savings',
      balance: '$1,80,600',
      bankBranchName: 'Kilpauk Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }
   else if(accountNumber>=8000000000 && accountNumber<9000000000 ){
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Santhuuu',
      mobileNumber: '6380976542',
      ifscNumber: 'SAN38054217',
      micr: '394758610',
      accountType: 'Savings',
      balance: '$00,000',
      bankBranchName: 'Erode Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }
    else{
    const mockAccountDetails = {
      accountNumber: '1234567890',
      accountUsername: 'Aaruuuu',
      mobileNumber: '9345737945',
      ifscNumber: 'KVB12763556',
      micr: '172986528',
      accountType: 'Savings',
      balance: '$669',
      bankBranchName: 'Arumbakkam Branch',
   
    };

    setAccountDetails(mockAccountDetails);
  }








  }
   else{
    setError(true);
    
   }

  };

  return (
    <div style={{width:"2100px", height:"785px", backgroundColor:"white", color:"black", backgroundRepeat:"no-repeat",backgroundSize:"cover" , backgroundImage: `url("https://paytmblogcdn.paytm.com/wp-content/uploads/2021/09/2_netbanking_Net-banking-what-are-its-advantages-disadvantages-features-and-more.jpg")`}}>
      <Container>
        <br></br>
        <br></br>
      <Typography variant="h5" align="center" gutterBottom style={{fontFamily:"cursive"}}>
        Account Details :
      </Typography>
      <br></br>
      <TextField
        label="Enter Account Number"
        variant="outlined"
        value={accountNumber}
        type='number'
        onChange={(e) => setAccountNumber(e.target.value)}
        margin="normal"
      />
      {error ? (<p style={{color:"red"}}>*invalid account number</p>) : " "}
      <br></br>
      <br></br>
      
      <Button variant="contained" color="primary" onClick={fetchAccountDetails} style={{ marginLeft: '10px' }}>
        Get Account Details
      </Button>
   <br></br>
   <br></br>
      


      {(accountDetails && !error ) ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={{ height:"300px", textAlign: 'center', width:"1000px",marginLeft:"100px"  }}>
              
           <br></br>
           <br></br>
              <Typography variant="h5" gutterBottom>
                Account Number: {accountNumber}
              </Typography>
              <br></br>
              <Typography>
                Account Username: {accountDetails.accountUsername}
              </Typography>
              <Typography>
                Mobile Number: {accountDetails.mobileNumber}
              </Typography>
              <Typography>
                IFSC Number: {accountDetails.ifscNumber}
              </Typography>
              <Typography>
                MICR: {accountDetails.micr}
              </Typography>
              <Typography>
                Account Type: {accountDetails.accountType}
              </Typography>
              <Typography>
                Balance: {accountDetails.balance}
              </Typography>
              <Typography>
                Bank Branch Name: {accountDetails.bankBranchName}
              </Typography>
              
            </Paper>
          </Grid>
        </Grid>
      ): " "}

     
    </Container>
    </div>
  )
}

export default Accountdetails

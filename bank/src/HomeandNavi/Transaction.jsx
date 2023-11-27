import React, { useState } from 'react';
import { Button, TextField, Typography,Box } from '@mui/material';
import './Home.css'
import TransactionHistory from './Transactiondetails';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const TransactionForm = ({ onTransaction }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [pin, setPin] = useState('1234');
  const [inpin, setInpin] = useState('');
  const [amount,setAmount] =useState('50000');
  const [tranid,setId]=useState('5');
 const [pinerror,setPinerror]=useState(false);
 const [trandone,setTrandone]=useState(false);
 
 const [trandatee,setTrandate]=useState('2023-4-15')
const [trandescriptionn,setTrandescription]=useState('')
const [tranamountt,setTranamount]=useState('')
const [dataa,setDataa]=useState({
        date: '',
        description : '',
        amount : 0

})

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
    setTrandescription(event.target.value)
  };

  const handleTransactionAmountChange = (event) => {
    setTransactionAmount(event.target.value);
    setTranamount(event.target.value);
  };
  
 
  const changeamount=(event)=>{

    
   


  if(pin === inpin){
   
   alert("Rs."+transactionAmount+" is Successfully transacted to "+accountNumber)
    
    setAmount(amount-transactionAmount)
   
    setId(tranid+1);
    
    setTrandone(true);
    
    setAccountNumber('');
    setTransactionAmount(' ');
    setInpin('')
  }

    else{
      setPinerror(true);
      
      setInpin('')
    }


    const currentDateObject = new Date();
    const formattedDate = currentDateObject.toISOString().split('T')[0];
    setTrandate(formattedDate);
    
    
    
    
    
    
    event.preventDefault()
  axios.post('http://localhost:3000/transactions', dataa)





  }
  const handlePinChange = (event) => {
   
    const input = event.target.value.replace(/\D/g, '');
    
    setInpin(input);
    setDataa({
      date : trandatee,
      description : trandescriptionn,
      amount: tranamountt
    });

  };

  

  return (

    
    
    < div className='transaction' style={{width:"2100px", height:"785px",textAlign:"center", backgroundColor:"white", color:"black" }}>
     <p style={{fontSize:"25px",color:"blue", fontFamily:"cursive", marginLeft:"200px"}}>Make your Transaction easy with A3 banking </p>
     <div style={{width:"800px" , height:"600px",marginTop:"60px",marginLeft:"800px " , backgroundColor:"white", border:"1px solid blue"}}>
        <div style={{width:"700px" , height:"500px",marginTop:"30px",marginLeft:"40px " , paddingTop:"10px" }}>
        
        <p>Your Account Balance:
        <Box
      border={1}
      borderRadius="borderRadius"
      p={2}
      
      marginBottom={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
        <Typography variant="h6" gutterBottom>
     {amount}
    </Typography>
    </Box>
    </p>
    
         <p>Account Number:
      <TextField
        label="Account Number"
        variant="outlined"
        fullWidth
        value={accountNumber}
        onChange={handleAccountNumberChange}
        margin="normal"
      /></p> 
           
         <p>Transaction Amount:
      <TextField
        label="Transaction Amount"
        variant="outlined"
        type='number'
        fullWidth
        value={transactionAmount}
        onChange={handleTransactionAmountChange}
        margin="normal"
      /></p> 
        
        <p>Enter Your Pin :
        <TextField
        label="PIN"
        variant="outlined"
        fullWidth
        type="password"
        value={inpin}
        onChange={handlePinChange}
        margin="normal"
      />
     </p>
      
            {
              (pinerror)? <p style={{color:"red"}}>enter valid pin</p> : ''
            }
      <Button variant="contained" color="secondary" onClick={changeamount} >
       Confirm Transaction
      </Button>
     
      </div>
      </div>
    </div>
  );
};

export default TransactionForm;

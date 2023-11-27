// TransactionHistory.js
import React, { useEffect, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const TransactionHistory = () => {

  const [transdata,setTransdata]=useState([])
  useEffect(()=>{
      axios.get(' http://localhost:3000/transactions')
      .then(res=>{
          setTransdata(res.data);
      }
          )

  }, []);

  


  return (
  <div style={{width:"2100px", height:"785px", backgroundColor:"white"}}>
    <div style={{marginTop:"30px", marginLeft:"160px",marginRight:"200px"}}>
      <Typography variant="h5" gutterBottom style={{fontFamily:"cursive"}}>
        Transaction History
      </Typography>
      <br></br>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead >
            <TableRow>
              <TableCell style={{fontSize:'21px',fontFamily:"monospace"}}>Date</TableCell>
              <TableCell style={{fontSize:'21px',fontFamily:"monospace"}}>Description/To account Number</TableCell>
              <TableCell style={{fontSize:'21px',fontFamily:"monospace"}}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transdata.map((trans)=> (
             
              <TableRow key={trans.id}>
                <TableCell style={{fontSize:'21px'}}>{trans.date}</TableCell>
                <TableCell style={{fontSize:'21px'}}>{trans.description}</TableCell>
                <TableCell style={{fontSize:'21px'}}>${trans.amount}</TableCell>
              </TableRow>
             

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
};

export default TransactionHistory;

import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Rating,
  Paper,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Review = () => {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
 const [sum,setsum]=useState(false);
  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setsum(false);
  };

  const handleSubmit = () => {
    console.log('Review submitted:', { rating, comment });
    setsum(true);
    setComment(" ");
  };

  return (
    <div style={{width:"2100px", height:"785px",backgroundColor:"white", color:"black", backgroundImage:`url("https://internetretailing.net/wp-content/uploads/2022/05/Fotolia_179843886_Subscription_Monthly_M_Cropped.jpg")` }}>
       
        <Container maxWidth="md" >
      <Paper elevation={3} style={{ padding: '30px', marginTop: '130px' }}>
        <Typography variant="h4" gutterBottom>
          Customer Review
        </Typography>
  <br></br>
        <Typography variant="subtitle1" gutterBottom style={{fontSize:"20px", fontFamily:"cursive"}}>
          Please share your feedback about our services:
        </Typography>

        <Rating
          name="rating"
          value={rating}
          precision={0.5}
          onChange={handleRatingChange}
          style={{ marginBottom: '20px' }}
        />
      <br></br>
        <TextField
          id="outlined-multiline-flexible"
          label="Comments"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={comment}
          onChange={handleCommentChange}
          style={{ marginBottom: '20px' }}
        />
   <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit Review
        </Button>
        <br></br>
        <br></br>

     {
      sum && (


   <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert severity="success" style={{fontSize:"20px"}}>Review has been Successfully submitted!</Alert>
    </Stack>
      )
     }

      </Paper>
    </Container>


    </div>
  )
}

export default Review

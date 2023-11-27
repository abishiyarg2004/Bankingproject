import React, { createContext, useContext, useState } from 'react';

const ReviewContext = createContext();

const CustomerReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const addReview = () => {
    if (newReview.trim() !== '') {
      setReviews((prevReviews) => [...prevReviews, newReview]);
      setNewReview('');
    }
  };

  return (
    <ReviewContext.Provider value={reviews}>
      <div style={{width:"2100px", height:"785px",backgroundColor:"white", color:"black"}}>
        <h1>Your points</h1>

        <div>
          <h2>Add your points</h2>
          <div>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
          </div>
          <div>
            <button onClick={addReview}>Submit</button>
          </div>
        </div>

        <div>
          
          <ReviewList />
        </div>
      </div>
    </ReviewContext.Provider>
  );
};

const ReviewList = () => {
  const reviews = useContext(ReviewContext);

  return (

    <ul>
      {reviews.map((review, index) => (
        <li key={index}>{review}</li>
      ))}
    </ul>
  );
};

export default CustomerReviewPage;

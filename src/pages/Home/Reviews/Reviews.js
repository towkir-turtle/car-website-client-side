import React, { useEffect, useState } from "react";
import { BoltRounded } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://damp-tor-44023.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Box style={{ margin: "100px 0" }}>
      <Container>
        <Typography
          sx={{ marginBottom: 6, fontWeight: "bold" }}
          gutterBottom
          variant="h4"
          component="div"
        >
          People Who Trust Us
        </Typography>
        <Grid container spacing={2}>
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;

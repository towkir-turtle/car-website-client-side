import React, { useEffect, useState } from "react";
import { BoltRounded } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Review from "../Review/Review";
import { makeStyles } from "@mui/styles";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://damp-tor-44023.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const useStyles = makeStyles({
    reviewContainer: {
      margin: "50px 0",
    },
    reviews: {
      textAlign: "center",
    },
    title: {
      fontFamily: "Genos",
      fontSize: "45px",
      color: "#EA001E",
      textAlign: "center",
      marginBottom: "50px",
    },
  });
  const { reviewContainer, title } = useStyles();

  return (
    <Box className={reviewContainer}>
      <Container>
        <h2 className={title}>People Who Trust Us</h2>
        <Grid className={reviews} container spacing={2}>
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;

import React from "react";
import { Grid } from "@mui/material";

const Review = ({ review }) => {
  const { img, date, description } = review;
  return (
    <Grid item xs={12} md={4}>
      <img
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
        src={img}
        alt=""
      />
      <p>
        <small>{date}</small>
      </p>
      <p>{description}</p>
    </Grid>
  );
};

export default Review;

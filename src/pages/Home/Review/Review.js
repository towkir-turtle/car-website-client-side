import React from "react";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";

const Review = ({ review }) => {
  const { img, date, description } = review;
  return (
    <Grid style={{ textAlign: "center" }} item xs={12} md={4}>
      <img
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
        src={img}
        alt=""
      />
      <p style={{ fontFamily: "Roboto" }}>
        <small>{date}</small>
      </p>
      <Rating
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        readOnly
      />
      <p style={{ fontFamily: "Roboto" }}>{description}</p>
    </Grid>
  );
};

export default Review;

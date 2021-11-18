import React from "react";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

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
      <StarRatingComponent
        name="rate"
        size={20}
        editing={false}
        renderStarIcon={() => (
          <span>
            <FaStar />
          </span>
        )}
        starCount={5}
        value={parseFloat(review.ratings)}
      />
      <p style={{ fontFamily: "Roboto" }}>{description}</p>
    </Grid>
  );
};

export default Review;

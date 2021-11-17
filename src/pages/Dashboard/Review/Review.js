import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://damp-tor-44023.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added reviews");
          reset();
        }
      });
  };

  const useStyles = makeStyles({
    productContainer: {
      display: "flex",
      justifyContent: "center",
    },
    input: {
      width: "80%",
      padding: " 10px 20px",
      margin: "10px 0",
      fontSize: "18px",
    },
  });

  const { reviewContainer, input } = useStyles();

  return (
    <Box className={reviewContainer}>
      <Container>
        <Box>
          <h2>Add A Review</h2>
          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className={input}
              defaultValue="https://i.ibb.co/82hcZfC/Timothy-hoch.jpg"
              {...register("img")}
              placeholder="Insert image url"
            />
            <br />
            <input
              className={input}
              type="date"
              {...register("date")}
              placeholder="date"
            />
            <br />

            <input
              className={input}
              type="text"
              {...register("description")}
              placeholder="review"
            />
            <br />
            <input className={input} type="submit" value="Add Review" />
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Review;

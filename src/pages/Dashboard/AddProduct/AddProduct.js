import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://damp-tor-44023.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added product");
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

  const { productContainer, input } = useStyles();
  return (
    <Box className={productContainer}>
      <Container>
        <Box>
          <h2>Add A Product</h2>
          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className={input}
              defaultValue="https://i.ibb.co/X42Lkvw/car.jpg"
              {...register("img")}
              placeholder="Insert image url"
            />
            <br />
            <input
              className={input}
              type="text"
              {...register("name")}
              placeholder="Product Name"
            />
            <br />
            <input
              className={input}
              type="text"
              {...register("description")}
              placeholder="Product Description"
            />
            <br />
            <input
              className={input}
              type="number"
              {...register("price")}
              placeholder="Price"
            />
            <br />
            <input className={input} type="submit" value="Add Product" />
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default AddProduct;

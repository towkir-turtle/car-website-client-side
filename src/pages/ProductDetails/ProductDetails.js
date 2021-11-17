import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
const ProductDetails = () => {
  const { productId } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://damp-tor-44023.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const singleProduct = details?.find((sp) => sp.id == productId);

  const onSubmit = (data) => {
    data.orderDetails = singleProduct;
    axios
      .post("https://damp-tor-44023.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("Order booked Successfully!");
          reset();
        }
      });
  };

  const useStyles = makeStyles({
    container: {
      margin: "50px 0",
    },
    productDetails: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "80%",
      padding: " 10px 20px",
      margin: "10px 0",
      fontSize: "18px",
    },
  });

  const { container, productDetails, input } = useStyles();

  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box className={productDetails}>
            <Box>
              <img src={singleProduct?.img} alt="" />
              <h4>{singleProduct?.name}</h4>
              <p>{singleProduct?.description}</p>
              <p>{singleProduct?.price}</p>
            </Box>
          </Box>
        </Grid>

        <Grid item sm={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className={input}
              defaultValue={user?.displayName}
              {...register("name", { required: true, maxLength: 20 })}
            />
            <br />
            <input
              className={input}
              defaultValue={user?.email}
              {...register("email")}
            />
            <br />
            <input
              className={input}
              type="text"
              {...register("address")}
              placeholder="Address"
            />
            <br />
            <input
              className={input}
              type="text"
              {...register("city")}
              placeholder="City"
            />
            <br />
            <input
              className={input}
              type="number"
              {...register("phone number")}
              placeholder="phone number"
            />
            <br />
            <input
              style={{
                width: "87.5%",
                padding: " 10px 0",
                margin: "10px 0",
                fontSize: "18px",
              }}
              type="submit"
              value="Order Now"
            />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;

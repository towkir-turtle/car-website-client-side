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
      fontFamily: "Roboto",
    },
    title: {
      fontFamily: "Genos",
      fontSize: "45px",
      color: "#EA001E",
      textAlign: "center",
      marginBottom: "50px",
    },
    productDetails: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    productName: {
      fontSize: "25px",
    },
    input: {
      width: "100%",
      padding: " 10px 20px",
      margin: "10px 0",
      fontSize: "18px",
    },
  });

  const { container, title, productDetails, productName, input } = useStyles();

  return (
    <Container className={container}>
      <h2 className={title}>Place Order</h2>
      <Grid container spacing={2}>
        <Grid item sm={12} md={7}>
          <Box className={productDetails}>
            <Box>
              <img style={{ width: "80%" }} src={singleProduct?.img} alt="" />
              <h3 className={productName}>{singleProduct?.name}</h3>
              <p>{singleProduct?.description}</p>
              <p>Price: ${singleProduct?.price}</p>
            </Box>
          </Box>
        </Grid>

        <Grid item sm={12} md={5}>
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
                width: "110%",
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

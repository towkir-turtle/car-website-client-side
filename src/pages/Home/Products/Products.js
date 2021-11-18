import { BoltRounded } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://damp-tor-44023.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const useStyles = makeStyles({
    productContainer: {
      margin: "50px 0",
    },
    title: {
      fontFamily: "Genos",
      fontSize: "45px",
      color: "#EA001E",
      textAlign: "center",
      marginBottom: "50px",
    },
  });
  const { productContainer, title } = useStyles();
  return (
    <Box className={productContainer}>
      <Container>
        <h2 className={title}>Featured Vehicles</h2>
        <Grid container spacing={2}>
          {products.slice(0, 6).map((product) => (
            <Product key={product?.id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;

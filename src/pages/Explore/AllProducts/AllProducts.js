import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://damp-tor-44023.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const useStyles = makeStyles({
    productContainer: {
      margin: "0 0",
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
        <h2 className={title}>Our Cars</h2>
        <Grid container spacing={2}>
          {products.map((product) => (
            <SingleProduct key={product?.id} product={product}></SingleProduct>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProducts;

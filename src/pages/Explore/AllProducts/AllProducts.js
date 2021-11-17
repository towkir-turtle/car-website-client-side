import { Container, Grid } from "@mui/material";
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
  return (
    <Box>
      <Container>
        <h2>All Cars</h2>
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

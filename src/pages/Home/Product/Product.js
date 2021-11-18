import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, img, description, price } = product;
  const useStyle = makeStyles({
    cardContent: {
      fontFamily: "Roboto",
      textAlign: "center",
    },
    detailsBtn: {
      fontFamily: "Genos",
      textDecoration: "none",
      borderRadius: "5px",
      fontSize: "18px",
      background: "#EA001E",
      color: "white",
      padding: "5px 20px",
    },
    productName: {
      fontSize: "20px",
    },
    productDescription: {
      fontSize: "16px",
      color: "#333",
    },
    productPrice: {
      fontSize: "18px",
      color: "#333",
    },
  });
  const {
    cardContent,
    detailsBtn,
    productName,
    productDescription,
    productPrice,
  } = useStyle();

  return (
    <Grid xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 355, marginBottom: 6 }}>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt="green iguana"
        />
        <CardContent className={cardContent}>
          <h3 className={productName}>{name}</h3>
          <p className={productDescription}>{description}</p>
          <p className={productPrice}>Price: {price} BDT</p>
          <Button>
            <Link className={detailsBtn} to={`/productDetails/${id}`}>
              Purchase
            </Link>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;

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
      fontFamily: "Genos",
      textAlign: "center",
    },
    detailsBtn: {
      textDecoration: "none",
      color: "#fff",
    },
  });
  const { cardContent, detailsBtn } = useStyle();

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
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Price: {price} BDT</p>
          <Button variant="contained" size="small">
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

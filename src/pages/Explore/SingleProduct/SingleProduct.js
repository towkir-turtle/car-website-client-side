import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { id, name, img, description, price } = product;

  const useStyle = makeStyles({
    cardContent: {
      textAlign: "center",
    },
    detailsBtn: {
      textDecoration: "none",
      color: "#fff",
    },
  });
  const { cardContent, detailsBtn } = useStyle();

  return (
    <Grid item sm={12} md={4}>
      <Card sx={{ maxWidth: 355, marginBottom: 6 }}>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt="green iguana"
        />
        <CardContent className={cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Price: {price} BDT
          </Typography>
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

export default SingleProduct;

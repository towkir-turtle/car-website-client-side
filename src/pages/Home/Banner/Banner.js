import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import banner from "../../../images/banner.png";
import { Box } from "@mui/system";

const Banner = () => {
  return (
    <Box sx={{ padding: "100px 0", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={5}>
            <Typography
              sx={{
                fontSize: "90px",
                fontFamily: "Genos",
                fontWeight: "bold",
                letterSpacing: "5px",
                color: "#EA001E",
              }}
              variant="h2"
            >
              ROTORS
            </Typography>
            <Typography
              sx={{ fontFamily: "Genos", color: "white" }}
              variant="h4"
            >
              Best & Luxury Cars
            </Typography>
            <Button
              style={{
                fontFamily: "Genos",
                fontSize: "20px",
                background: "#EA001E",
                color: "white",
                padding: "5px 30px",
                marginTop: "30px",
              }}
            >
              PURCHASE
            </Button>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <img style={{ width: "100%" }} src={banner} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

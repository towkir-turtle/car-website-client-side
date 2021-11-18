import React from "react";
import { Container, Grid, Typography as p } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../../images/logo_02.png";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const Footer = () => {
  const useStyles = makeStyles({
    footerContainer: {
      padding: "50px 0",
      fontFamily: "Roboto",
      backgroundColor: "#f2f2f2",
    },
    title: {
      fontFamily: "Genos",
      fontSize: "31px",
    },
  });
  const { footerContainer, title } = useStyles();
  return (
    <Box className={footerContainer}>
      <Container>
        <Grid container spacing={4} style={{ textAlign: "left" }}>
          <Grid item sm={12} md={4}>
            <img style={{ marginTop: "25px" }} src={logo} alt="" />
            <p>
              Cras sit amet mi non orci pretium consectetur. Donec iaculis ante
              ac sollicitudin luctus. Phasellus ut lacus lacus. Phasellus
              sagittis ex id tortor tincidunt luctus. Donec consectetur
              consequat bibendum
            </p>
            <p>
              <ArrowForwardIosIcon fontSize="5px" /> Rental Information
            </p>
            <p>
              <ArrowForwardIosIcon fontSize="5px" /> F.A.Q.
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <h2 className={title}>Contact Us</h2>
            <p>
              <p style={{ fontWeight: "bold" }}>
                <LocationOnIcon
                  style={{ fontSize: "20px", marginRight: "10px" }}
                />
                Main office address:
              </p>
              Unit 9, Manor Industrial Estate, <br /> Lower Wash Lane,
              Warrington, WA4
            </p>
            <p>
              <AccessTimeFilledIcon
                style={{ fontSize: "20px", marginRight: "10px" }}
              />
              8:00am-9:30pm
            </p>
            <p style={{ fontSize: "20px", marginRight: "10px" }}>
              <EmailIcon style={{ fontSize: "20px", marginRight: "10px" }} />
              rotorseml@eml.fr
            </p>
            <p>
              <LocalPhoneIcon
                style={{ fontSize: "20px", marginRight: "10px" }}
              />
              +880 1680 6361 89
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <h2 className={title}>Information</h2>
            <p>
              <ArrowForwardIosIcon fontSize="5px" />
              Find a Car for Rent in the Nearest Location
            </p>
            <p>
              <ArrowForwardIosIcon fontSize="5px" />
              Cars Catalog
            </p>
            <p>
              <ArrowForwardIosIcon fontSize="5px" />
              F.A.Q.
            </p>
            <p>
              <ArrowForwardIosIcon fontSize="5px" />
              About Us
            </p>
            <p>
              <ArrowForwardIosIcon fontSize="5px" />
              Contact Us
            </p>
            <p>
              <ArrowForwardIosIcon fontSize="5px" />
              Help Center
            </p>
            <p>
              <ArrowForwardIosIcon fontSize="5px" />
              Privacy Policy
            </p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

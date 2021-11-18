import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import safety from "../../../images/punch-with-safety.jpg";
import performance from "../../../images/punch-with-performance.jpg";

const BrandStory = () => {
  const useStyles = makeStyles({
    performanceInfo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#242424",
      textAlign: "center",
      color: "#fff",
      fontFamily: "Roboto",
    },
    performanceImg: {
      width: "100%",
    },
    title: {
      fontSize: "40px",
      fontStyle: "italic",
    },
    mainTitle: {
      fontFamily: "Genos",
      fontSize: "45px",
      color: "#EA001E",
      textAlign: "center",
    },
    littleDescription: {
      fontFamily: "Roboto",
      textAlign: "center",
      marginTop: "-30px",
      marginBottom: "50px",
    },
  });

  const {
    performanceInfo,
    performanceImg,
    title,
    mainTitle,
    littleDescription,
  } = useStyles();
  return (
    <Box>
      <h2 className={mainTitle}>Brand Story</h2>
      <p className={littleDescription}>
        Drive NEW FOREVER. A Whole new range of cars from Rotors.
      </p>
      <Grid container>
        <Grid item sm={12} md={7}>
          <img className={performanceImg} src={safety} alt="" />
        </Grid>
        <Grid className={performanceInfo} item sm={12} md={5}>
          <Box>
            <Box>
              <h2 className={title}>ABSOLUTE SAFETY</h2>
              <p>
                This is for the fun-lovers, the thrill-seekers, the daily
                commuters. But most of all, this is for the responsible ones.
                The PUNCH vibes with your need for safety.
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={performanceInfo} item sm={12} md={5}>
          <Box>
            <Box>
              <h2 className={title}>VERSATILE & SPIRITED PERFORMANCE</h2>
              <p>
                The high performance of the PUNCH will be the second reason
                onlookers will turn green with envy. The first will be the smile
                on your face while you are behind the wheel.
              </p>
            </Box>
          </Box>
        </Grid>

        <Grid item sm={12} md={7}>
          <img className={performanceImg} src={performance} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrandStory;

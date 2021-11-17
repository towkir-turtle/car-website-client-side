import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  const useStyles = makeStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    login: {
      width: "40%",
    },
    field: {
      width: "100%",
      marginBottom: "20px",
    },
  });
  const { container, login, field } = useStyles();
  return (
    <Box>
      <Container>
        <Box className={container}>
          <Box className={login}>
            <Typography style={{ textAlign: "center" }} variant="body1">
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                className={field}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                className={field}
                id="standard-basic"
                type="password"
                label="Your Password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />
              <Button className={field} variant="contained" type="submit">
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button type="text" color="inherit">
                  New User? Please Register
                </Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Successfully logged in</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p className={field}>--------------------------</p>
            <Button
              onClick={handleGoogleSignIn}
              className={field}
              variant="contained"
            >
              Google Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;

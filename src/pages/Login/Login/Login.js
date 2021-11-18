import React, { useState } from "react";
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
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
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
    },
    title: {
      fontFamily: "Genos",
      fontSize: "45px",
      color: "#EA001E",
      textAlign: "center",
      marginBottom: "30px",
    },
  });
  const { container, login, title } = useStyles();
  return (
    <Box>
      <Container>
        <Box className={container}>
          <Box className={login}>
            <h2 className={title}>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                style={{ width: "100%", marginBottom: "20px" }}
              />
              <TextField
                id="standard-basic"
                type="password"
                label="Your Password"
                name="password"
                onChange={handleOnChange}
                style={{ width: "100%", marginBottom: "20px" }}
              />
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#EA001E",
                  padding: "10px 0",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#fff",
                }}
                type="submit"
              >
                Login
              </Button>
              <NavLink
                style={{
                  color: "#000",
                  textDecoration: "none",
                }}
                to="/register"
              >
                <Button
                  type="text"
                  style={{
                    textAlign: "center",
                    margin: "20px 0",
                    color: "#000",
                  }}
                >
                  New User? Please Register
                </Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Successfully logged in</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <Button
              onClick={handleGoogleSignIn}
              style={{
                outline: "2px solid #EA001E",
                width: "100%",
                padding: "5px 0",
                color: "#EA001E",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <FaGoogle style={{ marginRight: "10px" }} /> SIGN IN WITH GOOGLE
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;

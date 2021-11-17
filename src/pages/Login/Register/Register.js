import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  textFieldClasses,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.passwordConfirm) {
      alert("Password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  const useStyles = makeStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    register: {
      width: "50%",
    },
    field: {
      width: "100%",
      marginBottom: "20px",
    },
  });
  const { container, register, field } = useStyles();
  return (
    <Box>
      <Container>
        <Box className={container}>
          <Box className={register}>
            <Typography
              style={{ textAlign: "center" }}
              variant="body1"
              gutterBotttom
            >
              Register
            </Typography>

            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  className={field}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  className={field}
                  id="standard-basic"
                  type="email"
                  label="Your Email"
                  name="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  className={field}
                  id="standard-basic"
                  type="password"
                  label="Your Password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  className={field}
                  id="standard-basic"
                  type="password"
                  label="Confirm Password"
                  name="passwordConfirm"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <Button className={field} variant="contained" type="submit">
                  Register
                </Button>
                <NavLink
                  className={field}
                  style={{ textDecoration: "none" }}
                  to="/login"
                >
                  <Button type="text" color="inherit">
                    Already Registerd? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">
                Congrats! User create successfully
              </Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;

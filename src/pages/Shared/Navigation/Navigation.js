import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../images/logo_01.png";
import { Link } from "react-router-dom";
import { Button, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useAuth from "../../hooks/useAuth";
const Navigation = () => {
  const theme = useTheme();
  const { user, logOut } = useAuth();

  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none !important",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    mobileNavItem: {
      textDecoration: "none",
      color: "#000",
    },
  });
  const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } =
    useStyle();

  const [state, setState] = React.useState(false);
  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link className={mobileNavItem} to="/home">
              Home
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link className={mobileNavItem} to="/explore">
              Explore
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
            </Typography>
            <Box className={navItemContainer}>
              <Link className={navItem} to="/home">
                <Button color="inherit">Home</Button>
              </Link>
              <Link className={navItem} to="/explore">
                <Button color="inherit">Explore</Button>
              </Link>
              {user?.email && (
                <Link className={navItem} to="/dashboard">
                  <Button color="inherit">Dashboard</Button>
                </Link>
              )}
              {user?.email ? (
                <Button onClick={logOut} color="inherit">
                  Logout
                </Button>
              ) : (
                <Link className={navItem} to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;

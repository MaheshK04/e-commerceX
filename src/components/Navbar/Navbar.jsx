import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  TextField, // Import TextField for the search bar
} from "@material-ui/core";
import { ShoppingCart, Search as SearchIcon } from "@material-ui/icons"; // Import SearchIcon
import logo from "../../assets/E.ico.png";
import useStyles from "./styles";
import { Link,useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  const location = useLocation();

  

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce"
              height="25px"
              className={classes.image}
            />
            Commerce
          </Typography>

          {/* Search Bar */}
          <div className={classes.search}>
            <TextField
              placeholder="Search..."
              onChange={(e) => e.target.value}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </div>

          {/* Spacer to push items to the right */}
          <div className={classes.grow} />

          {/* Contact Menu Item */}
          <MenuItem component={Link} to="/contact">
            Contact
          </MenuItem>

          {/* Shopping Cart Icon */}
          {(location.pathname === "/"|| location.pathname==='/contact'|| location.pathname==='/shipping')  && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Icon,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import images from "../../assets/images.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
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
              src={images}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary"></Badge>
              <ShoppingCart />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

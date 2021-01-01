import React, { Component } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const navlinks = [];

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

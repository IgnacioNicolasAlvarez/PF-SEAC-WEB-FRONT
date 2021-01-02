import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import "./header.styles.css";

const navLinks = [
  { title: `1`, path: `/1` },
  { title: `2`, path: `/2` },
  { title: `3`, path: `/3` },
  { title: `4`, path: `/4` },
  { title: `5`, path: `/5` },
];

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Container className="navbarDisplayFlex">
            <List
              className="navDisplayFlex"
              component="nav"
              aria-labelledby="main navigation"
            >
              <IconButton edge="start" color="inherit" aria-label="home">
                <Home fontSize="inherit" />
              </IconButton>
              {navLinks.map(({ title, path }) => (
                <a className="linkText" href={path} key={title}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}
// https://ansonlowzf.com/how-to-build-a-material-ui-navbar/
export default Header;

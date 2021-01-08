import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Layout from "./components/layout/layout.component";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home">
            <Navbar />
          </Route>
          <Route exact path="/">
            <Layout>
              <Login />
            </Layout>
          </Route>
          <Route exact path="/login">
            <Layout>
              <Login />
            </Layout>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

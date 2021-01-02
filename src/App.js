import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/layout.component";
import Dashboard from "./components/dashboard/dashboard.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lista_vacia: [],
    };
  }

  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/info-solicitud/:id">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;

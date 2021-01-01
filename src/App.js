import React, { Component } from "react";

import "./App.css";
import Dashboard from "./components/dashboard/dashboard.component"
class App extends Component {
  constructor() {
    super();
    this.state = {
      lista_vacia: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;

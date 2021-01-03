import React, { Component } from "react";

import "./App.css";
import  Navbar  from "./components/navbar/navbar.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lista_vacia: [],
    };
  }

  render() {
    return (
      <Navbar />
   
    );
  }
}

export default App;

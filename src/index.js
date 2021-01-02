import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
//import Header from "./components/header/header.component";

ReactDOM.render(
  <React.StrictMode>
    <div className='body'>
      
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

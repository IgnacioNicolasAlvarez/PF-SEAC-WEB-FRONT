import React from "react";
import "./layout.styles.css";

const Layout = ({ children }) => {
  return (
    <div className="container_1">
      <div className="container_2">
        <div className="container_3">
          <b>Sistema de Emergencia de Ayuda al Ciudadano</b>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;

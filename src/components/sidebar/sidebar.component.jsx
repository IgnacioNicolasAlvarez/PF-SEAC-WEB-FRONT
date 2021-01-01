import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Sidebar extends Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? "active" : "";
  };

  render() {
    return (
      <nav className="navbar navbar-inverse" bg="dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              SEAC
            </a>
          </div>
          <div
            className="navbar"
            id="bs-example-navbar-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className={this.getNavLinkClass("/")}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={this.getNavLinkClass("/Dashboard")}>
                <NavLink to="/Dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Sidebar = withRouter(Sidebar);
export default Sidebar;

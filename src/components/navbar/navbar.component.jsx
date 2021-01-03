// import React from "react";
// import { Link } from "react-router-dom";
// import "./navbar.styles.css";

// export const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">
//       Flask & React
//     </Link>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">
//             About
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

import Dashboard from "../dashboard/dashboard.component";
import InfoSolicitud from "../info-solicitud/info-solicitud.component";

const { Header, Content, Footer, Sider } = Layout;

class Navbar extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />

            <Switch>
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  <Link to="/dashboard">Option 1</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  <Link to="/info-solicitud/:id">Option 1</Link>
                </Menu.Item>
              </Menu>
            </Switch>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />

            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Switch>
                  <Route exact path="/">
                    <Dashboard></Dashboard>
                  </Route>
                  <Route exact path="/dashboard">
                    <Dashboard></Dashboard>
                  </Route>
                  <Route exact path="/info-solicitud/:id">
                    <InfoSolicitud />
                  </Route>
                </Switch>
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Navbar;

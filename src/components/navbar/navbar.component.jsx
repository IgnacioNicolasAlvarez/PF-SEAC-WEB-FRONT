import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { TableOutlined, HomeOutlined, BarChartOutlined } from "@ant-design/icons";
import Dashboard from "../dashboard/dashboard.component";
import InfoSolicitud from "../info-solicitud/info-solicitud.component";
import Home from "../home/home.component";

import "./navbar.styles.css";

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
        <Layout className="layout_top">
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />

            <Switch>
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                
               <Menu.Item key="1" icon={<HomeOutlined />}>
                  <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<TableOutlined />}>
                  <Link to="/dashboard">Mensajes Generales</Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<BarChartOutlined />}>
                  <Link to="/dashboard">Graficos</Link>
                </Menu.Item>
              </Menu>
            </Switch>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            
            <Content className="main_content">
              <div className="site-layout-background">
                <Switch>
                 
                  <Route exact path="/home">
                    <Home></Home>
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

            <Footer className="footer">SEAC 2021</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Navbar;

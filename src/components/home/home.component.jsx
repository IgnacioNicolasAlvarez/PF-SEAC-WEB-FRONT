import React, { Component } from "react";

import { Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import moment from "moment";

const url = "https://radiant-depths-00840.herokuapp.com/get_estadistica_diaria";

function get_dia_actual() {
  var x = moment().format("DD/MM/YYYY");
  return x;
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      estadisticas: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then((Response) => Response.json())
      .then((estadisticas) => this.setState({ estadisticas: estadisticas }));
  }

  render() {
    const { estadisticas } = this.state;
    console.log(estadisticas[0].count);

    return (
      <div className="site-statistic-demo-card">
        <h1>Resumen Estadístico Diario: {get_dia_actual()}</h1>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Mensajes Positivos"
                value={2}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Mensajes Neutros"
                value={0.25}
                precision={2}
                valueStyle={{ color: "#FAED27" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Mensajes Negativos"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import moment from "moment";
import Mapa from "../mapa/mapa_general.component";

const url = "https://radiant-depths-00840.herokuapp.com/get_estadistica_diaria";

function get_dia_actual() {
  var x = moment().format("DD/MM/YYYY");
  return x;
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      estadisticas_: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then((Response) => Response.json())
      .then((estadisticas) => {
        this.setState({ estadisticas_: estadisticas });
      });
    
      fetch(url)
      .then((Response) => Response.json())
      .then((estadisticas) => {
        this.setState({ estadisticas_: estadisticas });
      });
  }

  render() {
    const { estadisticas_ } = this.state;
  
    const e_filtradas_P  = estadisticas_.filter((e)  => e.sentimentalismo.includes('POSITIVO'));
    const e_filtradas_N  = estadisticas_.filter((e)  => e.sentimentalismo.includes('NEGATIVO'));
    const e_filtradas_NE = estadisticas_.filter((e)  => e.sentimentalismo.includes('NEUTRO'));

    console.log("P: " + e_filtradas_P)
    console.log("N: " + e_filtradas_N)
    console.log("NE: " + e_filtradas_NE)


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
                valueStyle={{ color: "green" }}
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
                valueStyle={{ color: "orange" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Mensajes Negativos"
                value={0.25}
                precision={2}
                valueStyle={{ color: "red" }}
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

///   <Mapa_general className="Mapa"></Mapa_general>
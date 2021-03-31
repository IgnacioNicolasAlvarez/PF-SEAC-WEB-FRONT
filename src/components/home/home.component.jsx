import React from "react";

import { Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import moment from "moment";

const Home = () => {

  function get_dia_actual() {
    var x = moment().format("DD/MM/YYYY");
    return (x);
  }
  return (
    <div className="site-statistic-demo-card">
      <h1>Resumen Estadístico Diario: {get_dia_actual()}</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Mensajes Positivos"
              value={11.28}
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
};

export default Home;

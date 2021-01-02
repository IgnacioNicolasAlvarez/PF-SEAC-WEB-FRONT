import React, { Component } from "react";
import moment from "moment";

import { SearchBox } from "../seach-box/search-box.component";
import DashBoardTable from "../dashboard-table/dashboard-table.component";
import "./dashboard.styles.css";

const formatear_fecha = (solicitud) => {
  return {
    ...solicitud,
    fecha: moment(solicitud.fecha).format("L"),
  };
};

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      solicitudes: [],
      filtro_descripcion: "",
    };
  }

  componentDidMount() {
    fetch("https://seac-backend.azurewebsites.net/solicitudes")
      .then((Response) => Response.json())
      .then((data) => data.map((i) => formatear_fecha(i)))
      .then((solicitudes) => this.setState({ solicitudes: solicitudes }));
  }

  render() {
    const { solicitudes, filtro_descripcion } = this.state;
    const solicitudes_filtradas = solicitudes.filter((solicitud) =>
      solicitud.descripcion
        .toLowerCase()
        .includes(filtro_descripcion.toLowerCase())
    );

    return (
      <div>
        <h1 id="titulo_tabla">Solicitudes</h1>
        <SearchBox
          placeholder="Buscar Descripcion"
          handleChange={(e) =>
            this.setState({ filtro_descripcion: e.target.value })
          }
        />
          <DashBoardTable solicitudes={solicitudes_filtradas}></DashBoardTable>
      </div>
    );
  }
}

export default Dashboard;

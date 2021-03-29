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
    //fetch("https://seac-backend.azurewebsites.net/solicitudes")
    fetch("https://radiant-depths-00840.herokuapp.com/solicitudes/")
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
        <div id="encabezado">
          <SearchBox
            placeholder="Buscar Descripcion"
            handleChange={(e) =>
              this.setState({ filtro_descripcion: e.target.value })
            }
          />
        </div>
        <div id="dashboard">
          <DashBoardTable solicitudes={solicitudes_filtradas}></DashBoardTable>
        </div>
      </div>
    );
  }
}

export default Dashboard;

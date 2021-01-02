import React, { Component } from "react";
import Moment from "moment";
import { Button } from "@material-ui/core";

import { SearchBox } from "../seach-box/search-box.component";
import "./dashboard.styles.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      solicitudes: [],
      filtro_descripcion: "",
    };
  }

  verDetalle() {}

  componentDidMount() {
    fetch("https://seac-backend.azurewebsites.net/solicitudes")
      .then((Response) => Response.json())
      .then((solicitudes) => this.setState({ solicitudes: solicitudes }));
  }

  renderTableHeader() {
    return (
      <tr>
        <th>Id</th>
        <th>Fecha</th>
        <th>Descripcion</th>
        <th>Location</th>
        <th>Estado</th>
        <th>Clasficacion</th>
        <th>Polaridad</th>
        <th>Operacion</th>
      </tr>
    );
  }

  renderTableData(solicitudes_filtradas) {
    Moment.locale("ar");
    return solicitudes_filtradas.map((solicitud) => {
      const {
        id,
        location,
        fecha,
        descripcion,
        estado,
        clasificacion,
        sentimentalismo,
      } = solicitud;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{Moment(fecha).format("L")}</td>
          <td>{descripcion}</td>
          <td>{location}</td>
          <td>{estado}</td>
          <td>{clasificacion}</td>
          <td>{sentimentalismo}</td>
          <td className="operacion_verDetalle">
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.verDetalle(id)}
            >
              Ver Detalle
            </Button>
          </td>
        </tr>
      );
    });
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
          handleChange={(e) => this.setState({ filtro_descripcion: e.target.value })}
        ></SearchBox>

        
        <table id="solicitudes">
          <tbody>
            {this.renderTableHeader()}
            {this.renderTableData(solicitudes_filtradas)}
          </tbody> 
        </table>
      </div>
    );
  }
}

export default Dashboard;

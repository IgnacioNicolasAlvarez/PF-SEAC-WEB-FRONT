import React, { Component } from "react";
import Moment from 'moment';

import './dashboard.styles.css'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      solicitudes: [],
    };
  }

  componentWillMount() {
    fetch("https://seac-backend.azurewebsites.net/solicitudes")
      .then((Response) => Response.json())
      .then((solicitudes) => this.setState({ solicitudes: solicitudes }));
  }

  renderTableHeader() {
    return (
      <tr>
        <th>Id</th>
        <th>Fecha</th>
        <th>descripcion</th>
        <th>location</th>
        <th>estado</th>
        <th>clasficacion</th>
        <th>polaridad</th>
        <th />
      </tr>
    );
  }

  renderTableData() {
    Moment.locale('ar');

    return this.state.solicitudes.map((solicitud) => {
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
          <td>{Moment(fecha).format('L')}</td>
          <td>{descripcion}</td>
          <td>{location}</td>
          <td>{estado}</td>
          <td>{clasificacion}</td>
          <td>{sentimentalismo}</td>
          <td>
            <button>Boton</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="titulo_tabla">Solicitudes</h1>
        <table id="solicitudes">
          <tbody>
            {this.renderTableHeader()}
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;

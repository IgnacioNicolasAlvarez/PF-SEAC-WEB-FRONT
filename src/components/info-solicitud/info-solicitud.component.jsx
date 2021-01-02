import React, { useState, useEffect } from "react";
import { Spin, Card } from "antd";
import { useParams } from "react-router-dom";

import "./info-solicitud.styles.css";

const url = "https://seac-backend.azurewebsites.net/solicitudes/";

const InfoSolicitud = () => {
  const [solicitud, setSolicitud] = useState();
  const { id } = useParams();
  
  useEffect(() => {
    fetch(url + id)
      .then((res) => res.json())
      .then((res) => {
        setSolicitud(res);
      });
  }, [id]);

  useEffect(() => {
    if (solicitud) {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          ...solicitud,
          estado: "Abierta",
          idsolicitud: solicitud.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
    }
  }, [solicitud, url]);

  if (!solicitud) {
    return <Spin size="large"></Spin>;
  }
  return (
    <Card className="Card-Detalle" title="Informacion de la Solicitud">
      <p>
        <b>Id: </b>
        {solicitud.id}
      </p>
      <p>
        <b>Dirección: </b>
        {solicitud.location}
      </p>
      <p>
        <b>Descripcion: </b>
        {solicitud.descripcion}
      </p>
      <p>
        <b>Estado: </b>
        {solicitud.estado}
      </p>
      <p>
        <b>Atendido por: Administrador</b>
      </p>
      <p>
        <b>Fecha: </b>
        {solicitud.fecha}
      </p>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img
          alt="solicitudImagen"
          src={`data:image/png;base64,${solicitud.imagen}`}
          style={{ width: "100px", height: "auto" }}
        />
      </div>
    </Card>
  );
};

export default InfoSolicitud;

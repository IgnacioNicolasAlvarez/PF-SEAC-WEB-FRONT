import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";

import "./mapa.styles.css";

const Mapa = ({lat, long, direccion})=> {
  const position = [lat, long];

  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {direccion}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;

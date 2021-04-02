import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";

import "./mapa.styles.css";

const Mapa_general = ({lat_long_direcc})=> {

    return (
    <div>
        <MapContainer center={[-64, 50]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.lat_long_direcc.map((point, index) => (
            <Marker key={index} position={[point.lat, point.long]}>
                <Popup>
                    {point.direccion}
                </Popup>
            </Marker>
        ))}
        </MapContainer>
    </div>);
};

export default Mapa_general;

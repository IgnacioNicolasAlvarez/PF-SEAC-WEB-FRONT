import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import React from "react";

import "./mapa.styles.css";

const Mapa_general = ({lat_long_direcc})=> {

    const positivo_icon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

    const negativo_icon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });


    const neutro_icon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

    return (
    <div>
        <MapContainer center={[-26.83, -65.24]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
        lat_long_direcc
        .filter((e)  => e.sentimentalismo.includes('NEGATIVO'))
        .map((point, index) => (
            <Marker icon={negativo_icon} key={index} position={[point.lat, point.long]}>
                <Popup>
                    {point.location}
                </Popup>
            </Marker>
        ))}


        {lat_long_direcc
        .filter((e)  => e.sentimentalismo.includes('POSITIVO'))
        .map((point, index) => (
            <Marker icon={positivo_icon} key={index} position={[point.lat, point.long]}>
                <Popup>
                    {point.location}
                </Popup>
            </Marker>
        ))}


        {lat_long_direcc
        .filter((e)  => e.sentimentalismo.includes('NEUTRO'))
        .map((point, index) => (
            <Marker icon={neutro_icon} key={index} position={[point.lat, point.long]}>
                <Popup>
                    {point.location}
                </Popup>
            </Marker>
        ))}
        </MapContainer>
    </div>);
};

export default Mapa_general;

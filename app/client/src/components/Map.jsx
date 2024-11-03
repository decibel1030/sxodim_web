import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Пример данных событий
const events = [
  { id: 1, name: "Концерт 1", position: [51.505, -0.09], description: "Описание концерта 1" },
  { id: 2, name: "Концерт 2", position: [51.515, -0.1], description: "Описание концерта 2" },
];

const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {events.map(event => (
        <Marker key={event.id} position={event.position}>
          <Popup>
            <strong>{event.name}</strong><br />
            {event.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
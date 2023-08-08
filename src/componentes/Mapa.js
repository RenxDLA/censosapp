import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';
//import { useEffect, useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Mapa = () => {
  const deptos = useSelector(state => state.deptos.deptos);
  const censados = useSelector(state => state.censados.censados);


  // useEffect(() => {

  // }, [censados])
  
  return (
    <div className="col">
      <h2>Mapa</h2>
      <div>
        <MapContainer center={[-32.75, -56]} zoom={6} scrollWheelZoom={false} style={{ width: "100%", height: "300px" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {deptos.map(d => <Marker key={d.id} position={[d.latitud, d.longitud]}>
            <Popup>
              {d.nombre} <br /> {censados.filter(c => c.departamento === d.id).length}
            </Popup>
          </Marker>)}
        </MapContainer>
      </div>
    </div>
  )
}

export default Mapa


import React from 'react'
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';

class GeoJsonMap extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            color: '#4a83ec',
            weight: 0.5,
            fillColor: "#1a1d62",
            fillOpacity: 1,
          })}
        />
        <Marker position={[50, 10]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default GeoJsonMap

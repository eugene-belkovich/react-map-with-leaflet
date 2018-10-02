import * as React from 'react';
import { CircleMarker } from 'react-leaflet';
import './map-widget.css';

class Pin extends React.Component {
  render() {
    return (
      <CircleMarker
        className="circle"
        center={this.props.center}
        fillOpacity={this.props.opacity}
        weight={0}
        {...this.props}
      />
    );
  }
}

export default Pin;

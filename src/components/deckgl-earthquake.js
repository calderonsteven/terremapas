import React, {Component} from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';

export default class DeckGLEarthquake extends Component {

  render() {
    const {viewport, data} = this.props;

    if (!data) {
      return null;
    }

    const layer = new GeoJsonLayer({
      id: 'geojson',
      data,
      opacity: 1,
      stroked: false,
      filled: true,
      // extruded: true,
      // wireframe: true,
      fp64: true,
      // getElevation: f => Math.sqrt(f.properties.valuePerSqm) * 10,
      getFillColor: f => [255, 0, 0],
      getLineColor: f => [0, 255, 0],
      // lightSettings: LIGHT_SETTINGS,
      // pickable: Boolean(this.props.onHover),
      // onHover: this.props.onHover
      getRadius: f => (f.properties.mag || 1) * 100000,
    });

    return (
      <DeckGL
        {...viewport}
        layers={ [layer] }
        debug={true}
      />
    );
  }
}

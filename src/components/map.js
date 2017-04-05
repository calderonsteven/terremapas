/* global document */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import MapGL from 'react-map-gl';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import DeckGLEarthquake from './deckgl-earthquake';
import TimeLine from './timeline';
import {loadEarthquakesData, updateViewport, getNextEarthquake} from '../actions/app-actions';

class Map extends Component {

  componentDidMount() {
    //load me please
    this.props.loadEarthquakesData('./data/all_week.json');

    // animacion a pedal
    // TODO: usar requestAnimationFrame
    // this is managed by the component it self because do not depends on state
    const everyXsegs = 7000;
    setInterval(this.props.getNextEarthquake, everyXsegs);
  }

  render() {
    const {apitoken, mapStyle, viewport, earthquakes, currentEarthquake} = this.props;

    return (
      <div>
        <TimeLine currentEarthquake={currentEarthquake} />
        <MapGL
          {...viewport}
          mapStyle={mapStyle}
          onChangeViewport={this.props.updateViewport}
          mapboxApiAccessToken={apitoken}>

          <DeckGLEarthquake
            viewport={viewport}
            data={currentEarthquake.feature}/>
        </MapGL>
      </div>
    );
  }
}

export default connect(
  state => state.app, //quick mapStateToProps
  {loadEarthquakesData, updateViewport, getNextEarthquake}
)(Map);

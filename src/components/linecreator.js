/* global document */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import DeckGL, {LineLayer} from 'deck.gl';

class LineCreator extends Component {

  constructor(props) {
    //set the default viewport as the state to enable the viewport change
    super(props);
    this.state = {
        ...this.props.viewport,
        layersdata: [],
        lastPosition: null
      };
  }

  addPoint(e){
    const {lastPosition} = this.state;

    if( !lastPosition ){
      this.setState({lastPosition: e});
    }else{
      let newLayersdata = this.state.layersdata;
      newLayersdata.push({
        sourcePosition: [lastPosition.lng, lastPosition.lat],
        targetPosition: [e.lng, e.lat]
      });

      this.setState({layersdata: newLayersdata, lastPosition: null});
    }
  }

  render() {
    const {viewport, width, height, layersdata} = this.state;
    const {apitoken} = this.props;
    const layers = [new LineLayer({ data: layersdata })];

    return (
      <MapGL
        {...viewport}
        width={width}
        height={height}
        onChangeViewport={viewport => this.setState({viewport})}
        onClick={this.addPoint.bind(this)}
        mapboxApiAccessToken={apitoken}>
        <DeckGL
          {...viewport}
          width={width}
          height={height}
          layers={layers} />
      </MapGL>
    );
  }
}

export default LineCreator;

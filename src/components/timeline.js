/* global document */
import React, {Component} from 'react';
// import {render} from 'react-dom';

class TimeLine extends Component {
  render() {
    // const timesArr = earthquakes.features.map(f => f.properties.time);
    // const minDate = Math.min(...timesArr);
    // const maxDate = Math.max(...timesArr);
    const { currentEarthquake } = this.props;

    if(!currentEarthquake.feature.properties){ return null; }

    const { properties } = currentEarthquake.feature;
    return (
      <div className="timeline" >
        Place: {properties.place} <br />
        Magniude: {properties.mag} <br />
        Type: {properties.type} <br />
        Time: {(new Date(properties.time)).toString()}
      </div>
    );
  }
}

export default TimeLine;

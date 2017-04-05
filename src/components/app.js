/* global document */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {LineLayer} from 'deck.gl';
import Map from './map';
import AppState from '../reducers';

import '../stylesheets/main.scss';

//defaults
import {DEFAULT_VIEWPORT_STATE, MAPBOX_STYLES} from '../constants/defaults';

// TODO: Move this to a smart place
// maybe to "location.hash"
const MAPBOX_TOKEN = location.hash.replace('#', ''); // eslint-disable-line

class App extends Component {

  render() {
    return (
      <Provider store={AppState} >
        <Map
          apitoken={MAPBOX_TOKEN}
          mapStyle={MAPBOX_STYLES.DARK} />
      </Provider>
    );
  }
}

const el = document.createElement('div');
document.body.appendChild(el);
render(<App />, el);

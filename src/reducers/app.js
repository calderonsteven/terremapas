import {handleActions} from 'redux-actions';

import {DEFAULT_APP_STATE} from '../constants/defaults';

export default handleActions({

  // one line reducer
  LOAD_DATA: (state, action) => ( {...state, earthquakes: action.earthquakes} ),

  UPDATE_VIEWPORT: (state, action) => ({
    ...state,
    viewport: {...state.viewport, ...action.viewport} //mix the viewports
  }),

  GET_NEXT_EARTHQUAKE: (state, action) => {
    const newstate = Object.assign({}, state);
    const {features} = newstate.earthquakes;
    let newIndex = newstate.currentEarthquake.index;
    // debugger;

    // go back
    if(newIndex == features.length){
      newIndex = 0;
    }

    // there is any feature to select?
    if(features.length != 0 ){
      ++newIndex;
      
      newstate.currentEarthquake = {
        index: newIndex,
        feature: features[newIndex]
      };

      //move the viewport
      newstate.viewport = {
        ...newstate.viewport,
        latitude: features[newIndex].geometry.coordinates[1],
        longitude: features[newIndex].geometry.coordinates[0]
      };
    }

    return newstate;
  },
}, DEFAULT_APP_STATE);

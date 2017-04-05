import {json} from 'd3-request';

// load the geojson data
export const loadEarthquakesData = (url) => {
  return (dispatch, getState) => {

    if(!url){ return; }

    // here is where the ajax magic happens
    json(url, (error, response) => {
      if (!error) {
        dispatch( {type: 'LOAD_DATA', earthquakes: response} );
      }
    });
  };
};

//one line action
export const updateViewport = viewport => ({type: 'UPDATE_VIEWPORT', viewport});
export const getNextEarthquake = () => ({type: 'GET_NEXT_EARTHQUAKE'});

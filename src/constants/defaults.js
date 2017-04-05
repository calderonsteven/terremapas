export const MAPBOX_STYLES = {
  DARK: 'mapbox://styles/mapbox/dark-v9'
};

export const DEFAULT_VIEWPORT_STATE = {
  latitude: 0,
  longitude: 0,
  zoom: 4,
  bearing: 0,
  pitch: 0,
  width: window.innerWidth,
  height: window.innerHeight
};

export const DEFAULT_APP_STATE = {
  earthquakes : {
    features: [] //need it in order to avoid a extra validation on map component
  },
  viewport : DEFAULT_VIEWPORT_STATE,
  currentEarthquake:{
    index: 0,
    feature: {}
  }
}

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './app';

// debuggig using https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// - why the reducer cross the street?
// - to modify the state!
export default createStore(
  combineReducers({
    app: appReducer //one lonely reducer :(
  }),
  composeEnhancers(applyMiddleware(thunk))
);

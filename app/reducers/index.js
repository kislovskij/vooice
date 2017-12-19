// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import servers from './servers';

const rootReducer = combineReducers({
  servers
});

export default rootReducer;

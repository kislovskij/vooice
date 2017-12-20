// @flow
import { combineReducers } from 'redux'
import { ADD_SERVER, CONNECT_SERVER, CONNECTION_READY, SET_ACTIVE_SERVER } from '../actions/server';
import activeServer from './activeServer'

export type serversStateType = {
  +server: Array
};

type actionType = {
  +type: string
};

function servers(state = [], action: actionType) {
  switch (action.type) {
    case ADD_SERVER:
      return [
        ...state,
        {
          id: action.id,
          address: action.address,
          connected: false,
          connecting: false
        }
      ]
      break;
    case CONNECT_SERVER:
      return state;
    case CONNECTION_READY:
      return state;
    default:
      return state;
  }
}

export default function server(state = {}, action: actionType) {
  return {
    servers: servers(state.servers, action),
    activeServer: activeServer(state.activeServer, action)
  }
}

// @flow
const WebSocket = require('ws');
const uuidv4 = require('uuid/v4');
import type { serversStateType } from '../reducers/servers';

type actionType = {
  +type: string
};

export const ADD_SERVER = 'ADD_SERVER';
export const CONNECT_SERVER = 'CONNECT_SERVER';
export const CONNECTION_READY = 'CONNECTION_READY';
export const CONNECTION_FAILED = 'CONNECTION_FAILED';

export function addServer(data) {
  return {
    type: ADD_SERVER,
    id: uuidv4(),
    address: data.address
  };
}

export const connectServer = id => (dispatch, getState) => {
  const ws = new WebSocket(`ws://${getState().servers.find(s => s.id === id).address}`);

  ws.on('open', () => dispatch({ type: CONNECTION_READY, id }));
  ws.on('close', () => dispatch({ type: CONNECTION_FAILED, id }));

  return {
    type: CONNECT_SERVER,
    id
  };
}

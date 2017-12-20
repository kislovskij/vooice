// @flow
const WebSocket = require('ws');
const uuidv4 = require('uuid/v4');
import type { serversStateType } from '../reducers/server';

type actionType = {
  +type: string
};

export const ADD_SERVER = 'ADD_SERVER';
export const CONNECT_SERVER = 'CONNECT_SERVER';
export const CONNECTION_READY = 'CONNECTION_READY';
export const CONNECTION_FAILED = 'CONNECTION_FAILED';
export const SET_ACTIVE_SERVER = 'SET_ACTIVE_SERVER';

export function addServer(data) {
  return {
    type: ADD_SERVER,
    id: uuidv4(),
    address: data.address
  };
}

export const connectServer = () => (dispatch, getState) => {
  const state = getState().server;
  const server = state.servers.find(s => s.id === state.activeServer.id);
  const id = server.id;
  const ws = new WebSocket(`ws://${server.address}`);

  ws.on('open', () => dispatch({ type: CONNECTION_READY, id }));
  ws.on('close', () => dispatch({ type: CONNECTION_FAILED, id }));

  return {
    type: CONNECT_SERVER,
    id: id
  };
}

export function setActiveServer(id) {
  return {
    type: SET_ACTIVE_SERVER,
    id
  };
}

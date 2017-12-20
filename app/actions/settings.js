// @flow
const uuidv4 = require('uuid/v4');
import type { serversStateType } from '../reducers/servers';

type actionType = {
  +type: string
};

export const ADD_SERVER = 'ADD_SERVER';
export const CONNECT_SERVER = 'CONNECT_SERVER';
export const CONNECTION_READY = 'CONNECTION_READY';

export function addServer(data) {
  return {
    type: ADD_SERVER,
    id: uuidv4(),
    address: data.address
  };
}

export function connectServer(id) {
  return {
    type: CONNECT_SERVER,
    data
  };
}

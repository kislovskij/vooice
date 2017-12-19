// @flow
const uuidv5 = require('uuid/v5');
import type { serversStateType } from '../reducers/servers';

type actionType = {
  +type: string
};

export const ADD_SERVER = 'ADD_SERVER';
export const CONNECT_SERVER = 'CONNECT_SERVER';
export const CONNECTION_READY = 'CONNECTION_READY';

export function addServer(address) {
  return {
    type: ADD_SERVER,
    id
    address
  };
}

export function connectServer(data) {
  return {
    type: CONNECT_SERVER,
    data
  };
}

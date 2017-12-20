// @flow
import { ADD_SERVER, CONNECT_SERVER, CONNECTION_READY } from '../actions/servers';

export type serversStateType = {
  +servers: Array
};

type actionType = {
  +type: string
};

export default function servers(state = [], action: actionType) {
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
    case CONNECT_SERVER:
      return state;
    case CONNECTION_READY:
      return state;
    default:
      return state;
  }
}

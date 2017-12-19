// @flow
import { ADD_SERVER, CONNECT_SERVER, CONNECTION_READY } from '../actions/servers';

export type serversStateType = {
  +servers: array
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
          address: action.data.address
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

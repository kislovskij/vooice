// @flow
import { SET_ACTIVE_SERVER } from '../actions/server';

type actionType = {
  +type: string
};

const initialState = {
  id: null,
  name: ''
};

export default function activeServer(state = initialState, action: actionType) {
  switch (action.type) {
  case SET_ACTIVE_SERVER:
    return Object.assign({}, state, { id: action.id })
  default:
    return state;
  }
}

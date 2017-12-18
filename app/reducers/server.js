// @flow
import { ADD_MESSAGE, SEND_MESSAGE } from '../actions/server';

export type messagesStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

const initialState = {
  connecting: false,
  connected: false
}

export default function messages(state = initialState, action: actionType) {
  switch (action.type) {
    case CONNECT:
      return Object.assign({}, state, {
        connecting: true
      })
    case CONNECTION_READY:
      return Object.assign({}, state, {
        connecting: false,
        connected: true
      })
    default:
      return state;
  }
}

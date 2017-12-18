// @flow
import { ADD_MESSAGE, SEND_MESSAGE } from '../actions/messages';

export type messagesStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

const initialState = {
  messages: []
}

export default function messages(state = initialState, action: actionType) {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            author: action.author,
            text: action.text
          }
        ]
      })
    case SEND_MESSAGE:
      return state - 1;
    default:
      return state;
  }
}

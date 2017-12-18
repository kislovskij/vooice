// @flow
import { ADD_MESSAGE, SEND_MESSAGE } from '../actions/messages';

export type messagesStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

const message = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        id: action.id,
        text: action.text,
        time: action.time,
        author: action.author
      }
    default:
      return state;
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (state.map(m => m.id).includes(action.id)) {
        return state
      } else {
        return [
          ...state,
          message(undefined, action)
        ];
      }
    case SEND_MESSAGE:
      return [
        ...state,
        message(undefined, action)
      ];
    default:
      return state;
  }
}

export default messages

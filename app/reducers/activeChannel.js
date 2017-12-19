// @flow
import { CHANGE_CHANNEL } from '../actions/channels';

type actionType = {
  +type: string
};

const initialState = {
  name: 'Lobby'
  id: 0
};

export default function activeChannel(state = initialState, action: actionType) {
  switch (action.type) {
  case CHANGE_CHANNEL:
    return {
      name: action.channel.name,
      id: action.channel.id
    };
  default:
    return state;
  }
}

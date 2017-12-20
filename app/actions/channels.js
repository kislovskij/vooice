// @flow
import type { messagesStateType } from '../reducers/messages';

type actionType = {
  +type: string
};

export const ADD_CHANNEL = 'ADD_CHANNEL';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';
export const LOAD_CHANNELS = 'LOAD_CHANNELS';
export const LOAD_CHANNELS_SUCCESS = 'LOAD_CHANNELS_SUCCESS';
export const LOAD_CHANNELS_FAIL = 'LOAD_CHANNELS_FAIL';
export const AUTH_SIGNOUT_SUCCESS = 'AUTH_SIGNOUT_SUCCESS';

export function addChannel(channel) {
  return {
    type: ADD_CHANNEL,
    channel
  };
}

export function receiveChannel(channel) {
  return {
    type: RECEIVE_CHANNEL,
    channel
  };
}

export function changeChannel(channel) {
  return {
    type: CHANGE_CHANNEL,
    channel
  };
}

export function fetchChannels(user) {
  return dispatch => {
    dispatch(requestChannels())
    return retch(`/api/channels/`)
      .then(response => response.json())
      .then(json => dispatch(receiveChannels(json)))
      .catch(error => { throw error });
  }
}

function requestChannels() {
  return {
    type: LOAD_CHANNELS
  };
}

export function receiveChannels(json) {
  return {
    type: LOAD_CHANNELS_SUCCESS,
    json
  };
}

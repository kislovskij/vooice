const initialState = {
  localStream: {
    enabled: false
  },
  remoteStreams: []
}

export default function audio(state = initialState, action: actionType) {
  switch (action.type) {
  case TOGGLE_REMOTE_AUDIO:
    return {...state,
      remoteStreams[action.id]: { muted: action.enabled }
    };
  case TOGGLE_LOCAL_AUDIO:
    return {...state,
      localStream: { ...state.localStream, enabled: action.enabled }
    };
}

const GUM_CONSTRAINTS = {
  video: false,
  audio: {
    echoCancellation: true,
    googAutoGainControl: false,
    googEchoCancellation: true,
    googEchoCancellation2: true,
    googHighpassFilter: true,
    googNoiseSuppression: true,
    googNoiseSuppression2: true,
    googTypingNoiseDetection: true
  }
}

export const getLocalStream = () => (dispatch, getState) => {
  const { localStream } = getState().audio;

  if (!localStream || localStream.loading) {
    dispatch({
      type: GET_LOCAL_STEAM
    });

    if (!window.RTCPeerConnection || !navigator.getUserMedia) {
      return dispatch({
        type: LOCAL_STREAM_ERROR,
        error: {
          status: 405,
          description: 'WebRTC is not supported by your browser.'
        }
      });
    }

    return navigator.mediaDevices.getUserMedia(GUM_CONSTRAINTS)
      .then(stream => {
        console.log('Received local stream.');

        return dispatch({
          type: SET_LOCAL_STREAM
        });
      })
      .catch(error => {
        error.status = error.status || error.name;
        return dispatch({
          type: LOCAL_STREAM_ERROR,
          error
        });
      });
  }
}

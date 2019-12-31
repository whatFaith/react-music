import { PLAYLIST_CONFIG_SUCCESS } from '../actions';

const initState = {
  data: []
};

export default function playlist(state = initState, action) {
  const {
    type,
    data
  } = action;

  switch (type) {
    case PLAYLIST_CONFIG_SUCCESS:
      return {
        ...state,
        data: data.playlists
      };
    default:
      return state;
  }
}
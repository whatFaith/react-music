import { PLAYLIST_CONFIG_SUCCESS } from '@ACTION';

const initState = {
  data: []
};

export function playlist(state = initState, action) {
  const {
    type,
    data
  } = action;

  switch (type) {
    case PLAYLIST_CONFIG_SUCCESS:
      return {
        ...state,
        data: (state.data || []).concat(data.playlists)
      };
    default:
      return state;
  }
}
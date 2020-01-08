import { PLAY_DETAIL_CONFIG_SUCCESS } from '@ACTION';

const initState = {
  playlist: {},
  privileges: []
};

export function playDetail(state = initState, action) {
  const {
    type,
    data
  } = action;

  switch (type) {
    case PLAY_DETAIL_CONFIG_SUCCESS:
      return {
        ...state,
        playlist: data.playlist,
        privileges: data.privileges
      };
    default:
      return state;
  }
}
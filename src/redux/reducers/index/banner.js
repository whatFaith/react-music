import { BANNER_CONFIG_SUCCESS } from '@ACTION';

const initState = {
  data: []
};

export function banner(state = initState, action) {
  const {
    type,
    data
  } = action;

  switch (type) {
    case BANNER_CONFIG_SUCCESS:
      return {
        ...state,
        data: data.banners
      };
    default:
      return state;
  }
}
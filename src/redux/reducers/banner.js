import { BANNER_CONFIG_SUCCESS } from '../actions';

const initState = {
  data: []
};

export default function banner(state = initState, action) {
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
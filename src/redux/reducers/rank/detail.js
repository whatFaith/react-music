import { TOP_DETAIL_CONFIG_SUCCESS } from '@ACTION';

const initState = {
  artistToplist: {},
  list: [],
  rewardToplistL: {}
};

export function topDetail(state = initState, action) {
  const {
    type,
    data
  } = action;

  switch (type) {
    case TOP_DETAIL_CONFIG_SUCCESS:
      return {
        ...state,
        artistToplist: data.artistToplist,
        list: data.list,
        rewardToplist: data.rewardToplist
      };
    default:
      return state;
  }
}
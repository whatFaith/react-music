import { PERSONAL_CONFIG_SUCCESS } from '../actions';

const initState = {
  data: []
};

export default function personal(state = initState, action) {
  const {
    type,
    data
  } = action;

  switch (type) {
    case PERSONAL_CONFIG_SUCCESS:
      return {
        ...state,
        data: data.result
      };
    default:
      return state;
  }
}
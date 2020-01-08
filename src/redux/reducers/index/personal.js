import { PERSONAL_CONFIG_SUCCESS } from '@ACTION';

const initState = {
  data: []
};

export function personal(state = initState, action) {
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
import { STORE_LIST_SUCCESS } from '../actions';

const initState = {
  data: {}
};

export default function storeList(state = initState, action) {
  const {
    type,
    data,
    pageIndex
  } = action;

  switch (type) {
    case STORE_LIST_SUCCESS:
      return {
        ...state,
        data,
        [pageIndex]: data.data
      };
    default: 
      return state;
  }
}
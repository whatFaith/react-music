import { combineReducers } from 'redux';

import banner from './banner';
import personal from './personal';
import playlist from './playlist';

export default combineReducers({
  banner,
  personal,
  playlist
});

import { combineReducers } from 'redux';

import { banner, personal } from './index/index.js';
import { playlist } from './sheetlist/playlist';
import { topDetail } from './rank/detail';
import { playDetail } from './detail/detail';

export default combineReducers({
  banner,
  personal,
  playlist,
  topDetail,
  playDetail
});

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { playlist } from '@ACTION';

import './index.less';

class Sheetlist extends PureComponent {

  componentDidMount() {
    this.fetchPlaylist(0);
  }

  fetchPlaylist = (offset) => {
    const { fetchPlaylist } = this.props;

    fetchPlaylist && fetchPlaylist(offset);
  }

  render() {
    return (
      <div className="p-sheetlist">
        111
      </div>
    );
  }
}

export default connect(
  state => state,
  (dispatch) => {
    return {
      fetchPlaylist: (offset) => {
        return dispatch(playlist(offset));
      }
    }
  }
)(Sheetlist);

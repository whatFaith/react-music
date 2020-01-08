import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { translateNum } from '@ASSETS/js/util';

import './index.less';

class Playlist extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { artistToplist, list, rewardToplist } = this.props;

    return (
      <div className="p-playlist">
        <div className="rank-title">官方榜单</div>
      </div>
    );
  }
}

export default connect(
  state => {

    return {
      state
    }
  }
)(Playlist);

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PullToRefresh } from 'antd-mobile';

import { playlist } from '@ACTION';

import { translateNum } from '@ASSETS/js/util';

import Loading from '@COMPONENT/loading';

import './index.less';

class Rank extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: true,
      height: document.querySelector('.p-all--scroll') ? document.querySelector('.p-all--scroll').offsetHeight : document.documentElement.clientHeight,
    }
  }

  componentDidMount() {
    this.fetchPlaylist();
  }

  fetchPlaylist = () => {
    this.setState({ refreshing: true, isLoading: true });
    const { fetchPlaylist, playlist } = this.props;

    return fetchPlaylist && fetchPlaylist(playlist.data.length).then(() => {
      this.setState({
        refreshing: false,
        isLoading: false
      });
    });
  }

  render() {
    const { playlist } = this.props;

    return (
      <div className="p-rank">
        
      </div>
    );
  }
}

export default connect(
  state => {
    const {
      playlist
    } = state;

    return {
      playlist
    }
  },
  (dispatch) => {
    return {
      fetchPlaylist: (offset) => {
        return dispatch(playlist(offset));
      }
    }
  }
)(Sheetlist);

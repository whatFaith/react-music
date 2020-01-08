import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PullToRefresh } from 'antd-mobile';

import { playlist } from '@ACTION';

import { translateNum } from '@ASSETS/js/util';

import Loading from '@COMPONENT/loading';

import './index.less';

class Sheetlist extends PureComponent {
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
    if (this.state.isLoading) return;
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
      <div className="p-sheetlist" ref={_ => this.ptr = _}>
        <PullToRefresh
          damping={60}
          style={{
            height: this.state.height,
            overflow: 'auto'
          }}
          direction={'up'}
          refreshing={this.state.refreshing}
          onRefresh={this.fetchPlaylist}
        >
          {
            playlist.data.map((list) => {
              return (
                <div className="music" key={list.id}>
                  <div className="img">
                    <div className="person">
                      <i />{translateNum(list.playCount)}
                    </div>
                    <img src={list.coverImgUrl} />
                  </div>
                  <p>{list.name}</p>
                </div>
              );
            })
          }
        </PullToRefresh>
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

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { topDetail } from '@ACTION';

import { translateNum } from '@ASSETS/js/util';

import './index.less';

class Rank extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchDetail();
  }

  fetchDetail = () => {
    console.log('this.props-->', this.props);
    const { fetchDetail } = this.props;

    fetchDetail && fetchDetail();
  }

  render() {
    const { artistToplist, list, rewardToplist } = this.props;

    return (
      <div className="p-rank">
        <div className="rank-title">官方榜单</div>
        {
          list.length > 0 && list.map((data) => {
            return (
              <Link to={`/playlist/${data.id}`} key={data.id}>
                <div className="row-item">
                  <div className="item-img">
                    <img src={data.coverImgUrl} alt={data.name} />
                  </div>
                  <div className="item-list">
                    {
                      Array.isArray(data.tracks) && data.tracks.map((track, index) => {
                        return (
                          <p key={`tracks-${index}`}>{track.first}-{track.second}</p>
                        )
                      })
                    }
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    );
  }
}

export default connect(
  state => {
    const {
      topDetail = {}
    } = state;
    const {
      artistToplist = {},
      list = [],
      rewardToplist = {}
    } = topDetail;

    return {
      artistToplist,
      list,
      rewardToplist
    }
  },
  (dispatch) => {
    return {
      fetchDetail: () => {
        return dispatch(topDetail());
      }
    }
  }
)(Rank);

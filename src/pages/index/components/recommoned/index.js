import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { translateNum } from '@ASSETS/js/util';

import './index.less';

class Recommoned extends PureComponent {

  render() {
    const { personal } = this.props;

    if (!(Array.isArray(personal.data) && personal.data.length > 0)) return null;
    return (
      <div className="index-recommoned">
        <div className="title">推荐歌单</div>
        <div className="music-container">
          {
            personal.data.map((list, index) => {
              return (
                <div className="music">
                  <div className="img">
                    <div className="person">
                      <i />{ translateNum(list.playCount) }
                    </div>
                    <img src={list.picUrl} />
                  </div>
                  <p>{ list.name }</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    const { personal } = state;

    return {
      personal
    };
  }
)(Recommoned)

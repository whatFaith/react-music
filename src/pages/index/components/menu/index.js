import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './index.less';

export default class Menu extends PureComponent {

  render() {

    return (
      <div className="index-menu">
        <div className="menu">
          <Link to="/sheetlist">
            <i className="menu-music" />
            <span>歌单</span>
          </Link>
        </div>
        <div className="menu">
          <Link to="/rank">
            <i className="menu-rank" />
            <span>排行榜</span>
          </Link>
        </div>
      </div>
    );
  }
}

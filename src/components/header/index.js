import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.less';

import UserInfo from '../user-info';

class Header extends PureComponent {

  state = {
    userInfoShow: false
  }

  changeUserInfo = () => {
    this.setState({
      userInfoShow: !this.state.userInfoShow
    });
  }

  render() {
    const { userInfoShow } = this.state;

    return (
      <div className="c-header">
        <div className="c-header--container">
          <div className="c-header--icon">
            <i className="menu" onClick={this.changeUserInfo} />
          </div>
          <div className="c-header--icon icon-logo">
            <Link to="/"><i className="logo" /></Link>
          </div>
          <div className="c-header--icon icon-search">
            <Link to="/search"><i className="search" /></Link>
          </div>
        </div>
        {
          userInfoShow && <UserInfo changeUserInfo={this.changeUserInfo} />
        }
      </div>
    );
  }
}

export default connect(
  (state) => {
    const {
      banner
    } = state;
    return {
      banner
    }
  }
)(Header);

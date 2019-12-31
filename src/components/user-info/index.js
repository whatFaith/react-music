import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './index.less';

import POWER from './images/power.png';

class UserInfo extends PureComponent {

  render() {
    return (
      <div className="c-user-info" onClick={this.props.changeUserInfo}>
        <div className="c-user-info--box">
          <div className="c-user-info--container">
            <div className="c-user-info--img" />
          </div>
        </div>
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
)(UserInfo);

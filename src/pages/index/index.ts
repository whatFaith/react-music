import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd-mobile';

import { banner, personal } from '@ACTION';

import Banenr from './components/banner';
import Menu from './components/menu';
import Recommoned from './components/recommoned';

import './index.less';

class Index extends PureComponent {

  componentDidMount() {
    const { fetchBanner, fetchPersonal } = this.props;

    fetchBanner && fetchBanner();
    fetchPersonal && fetchPersonal();
  }

  render() {
    console.log('this.props->', this.props);
    return (
      <div className="p-index">
        <Banenr />
        <Menu />
        <Recommoned />
      </div>
    );
  }
}

export default connect(
  state => state,
  (dispatch) => {
    return {
      fetchBanner: () => {
        return dispatch(banner());
      },
      fetchPersonal: () => {
        return dispatch(personal());
      }
    }
  }
)(Index);

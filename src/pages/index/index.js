import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

import { banner } from '../../redux/actions';
import Container from './components/container';

import './index.less';

const menuImg = require('./images/menu.png');
const logoImg = require('./images/logo.png');

const tabs = [
  { title: <i className="p-index--icon menu" /> },
  { title: <i className="p-index--icon logo" /> },
  { title: <i className="p-index--icon search" /> },
];

class Index extends PureComponent {

  componentDidMount() {
    const { fetchBanner } = this.props;

    fetchBanner && fetchBanner();
  }

  render() {
    console.log('this.props->', this.props);
    return (
      <div className="p-index">
        <Tabs tabs={tabs}
          initialPage={1}
          tabBarBackgroundColor="#e5473c"
          swipeable={false}
          tabBarUnderlineStyle={{display: 'none'}}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#e5473c' }}>
            <Container />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
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
  },
  (dispatch) => {
    return {
      fetchBanner: () => {
        return dispatch(banner());
      }
    }
  }
)(Index);

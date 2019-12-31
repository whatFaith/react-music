import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'antd-mobile';

import './index.less';

class Banenr extends PureComponent {

  render() {
    const {
      banner = {}
    } = this.props;

    if (!(Array.isArray(banner.data) && banner.data.length > 0)) return null;
    return (
      <div className="index-banner">
        <div className="index-banner--container">
          <Carousel
            autoplay={true}
            infinite={true}
          >
            {
              banner.data.map((val, idx) => {
                return (
                  <a
                    key={val.targetId}
                    className="index-banner--link"
                  >
                    <img
                      src={val.imageUrl}
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                      }}
                    />
                  </a>
                )
              })
            }
          </Carousel>
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
)(Banenr);

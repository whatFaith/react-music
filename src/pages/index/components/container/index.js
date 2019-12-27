import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Carousel, WingBlank } from 'antd-mobile';

import './index.less';

class Container extends PureComponent {

  render() {
    const {
      banner = {}
    } = this.props;

    console.log('banner->', banner);

    return (
      <div className="c-container">
        <WingBlank>
          <Carousel
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
            autoplay={true}
            infinite
          >
            {
              Array.isArray(banner.data) && banner.data.map((val, idx) => {
                return (
                  <a
                    key={val.targetId}
                    className="c-container--link"
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
        </WingBlank>
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
)(Container);

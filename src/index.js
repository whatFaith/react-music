import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'babel-polyfill';
import 'lib-flexible/flexible';
import axios from 'axios';

import store from './redux/store';
import GetRouter from './router';

// import { message } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.less';

axios.interceptors.response.use(response => {
  if (response.data && response.data.status === -1) {
    // console.log('routeHistory--->', createBrowserHistory);
    // console.log('replace-->', replace({ pathname: '/login' }));
    // message.error('登录过期，请重新登录', 1.5, () => {
      // window.location.href = '/login';
      // console.log('history-->', createBrowserHistory());
      // createBrowserHistory().push({
      //   pathname: 'gallery',
      //   // state: { nextPathname: nextPathname }
      // })
    // })

    return Promise.reject(response);
  } else {
    return Promise.resolve(response);
  }
})

class Route extends PureComponent {
  render() {
    return (
      <div className="p-route">
        <GetRouter />
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('app')
);
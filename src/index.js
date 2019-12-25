import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import GetRouter from './router';

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
  <Route />,
  document.getElementById('app')
);
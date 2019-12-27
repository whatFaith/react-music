import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Index from '../pages/index';

const getRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Index} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
)

export default getRouter;
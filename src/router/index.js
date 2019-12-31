import React, { Component, lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '@COMPONENT/header';
import Loading from '@COMPONENT/loading';

const Index = lazy(() => import('@PAGE/index'));
const Sheetlist = lazy(() => import('@PAGE/sheetlist'));

import './index.less';

class GetRouter extends Component {

  render() {
    return (
      <Router>
        <div className="p-all">
          <Header />
          <main className="p-all--wrapper">
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path='/sheetlist' exact component={Sheetlist} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </main>
        </div>
      </Router>
    );
  }
}


export default GetRouter;
import React, { Component, lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '@COMPONENT/header';
import MmNav from '@COMPONENT/mm-nav';
import Footer from '@COMPONENT/footer';
import Loading from '@COMPONENT/loading';

const Index = lazy(() => import('@PAGE/index'));
const Sheetlist = lazy(() => import('@PAGE/sheetlist'));
const Rank = lazy(() => import('@PAGE/rank'));
// const Playlist = lazy(() => import('@PAGE/playlist'));
import Playlist from '@PAGE/playlist';

import './index.less';

class GetRouter extends Component {

  render() {
    return (
      <Router>
        <div className="p-all">
          <Header />
          <MmNav />
          <main className="p-all--wrapper">
            <div className="p-all--scroll">
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route path="/" exact component={Index} />
                  <Route path='/sheetlist' exact component={Sheetlist} />
                  <Route path='/rank' exact component={Rank} />
                  <Route path='/playlist/:id' exact component={Playlist} />
                  <Redirect to="/" />
                </Switch>
              </Suspense>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default GetRouter;
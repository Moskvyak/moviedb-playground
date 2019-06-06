
import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
// import Header from '../components/Header';

import Movie from './Movie';
import Movies from './Movies';


const AppRoutes = () =>
  <React.Fragment>
    {/* <Header /> */}
    <Switch>
      <Route exact={true} path="/" component={Movies} />
      <Route exact={true} path="/:id" component={Movie} />
    </Switch>
  </React.Fragment>;
export default withRouter(AppRoutes);
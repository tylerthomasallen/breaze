import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './navbar';
import Loading from './loading';
import Trending from './trending';
import Search from './search';
import Favorites from './favorites';
import Login from './login';
import Signup from './signup';

const Routes = () => (
  <div className="app-parent">
    
    <NavBar />
    <Loading />

    <Switch>
      <Route exact path="/trending" component={Trending} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/favorites" component={Favorites} />
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/signup" component={Signup} />
      <Redirect to="/trending" />
    </Switch>

  </div>
);

export default Routes;
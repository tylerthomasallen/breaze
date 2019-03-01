import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './navbar';
import Trending from './trending';
import Search from './search';
import Favorites from './favorites';
import Login from './login';
import Signup from './signup';

const Routes = () => (
  <div className="parent">
    
    <NavBar />

    <Switch>
      <Route exact path="/" component={Trending} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/favorites" component={Favorites} />
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/signup" component={Signup} />
      <Redirect to="/" />
    </Switch>

  </div>
);

export default Routes;
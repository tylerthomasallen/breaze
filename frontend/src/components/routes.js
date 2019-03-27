import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './navbar';
import Loading from './loading';
import Trending from './trending';
import Search from './search';
import Favorites from './favorites';
import Login from './user/login'
import Signup from './user/signup';
import GiphShow from './giphs/giph_show';

const Routes = () => {
  let navBar = <NavBar />

  const noNavPath = { '#/signup': true, '#/login': true };

  if (noNavPath[window.location.hash] === true) {
    navBar = null;
  }

  window.scrollTo(0, 0);

  return(
    <div className="parent">
    {navBar}
    <Loading />
  
    <Switch>
      <Route exact path="/" component={Trending} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/giph/:giphId" component={GiphShow}/>
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/signup" component={Signup} />
      <Redirect to="/" />
    </Switch>
  
  </div>

  )
}


export default Routes;
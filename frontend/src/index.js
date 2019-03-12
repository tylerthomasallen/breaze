import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store';
import jwt_decode from'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/user_actions';

import '../src/assets/styles/parent.scss';
import { setLoading, loadApp } from './actions/loading_actions';
import { getCurrentUser } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', async () => {
  let store;

  // if a rueturning user has a session token stored in local storage
  if (localStorage.jwtToken) {
    // set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken)

    // decode the token to obtain the users information
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const { email } = decodedUser;

    // authenticate the current user
    const preloadedState = { user: { isAuthenticated: true }, loading: true }

    // configure our redux store with preloadedState;
    store = configureStore(preloadedState);

    // get our current user and their favorites
    await store.dispatch(getCurrentUser(email));

    // logout our current user if the cookie is expired
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login'
    }

  } else {

    // configure our redux store with no preloaded state;
    store = configureStore({ loading: true });
   
  }

  // do any actions needed to load the app, i.e. get trending giphs
  await store.dispatch(loadApp());

  // let our app know we are done loading, time to show the content
  await store.dispatch(setLoading(false))

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store';
import jwt_decode from'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/user_actions';

import styles from './styles.scss';
import { getTrending } from './actions/giph_actions';

document.addEventListener('DOMContentLoaded', async () => {
  let store;

  // if a rueturning user has a session token stored in local storage
  if (localStorage.jwtToken) {
    // set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken)

    // decode the token to obtain the users information
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { user: { isAuthenticated: true }}

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login'
    }

  } else {
    store = configureStore({});
  }

  await store.dispatch(getTrending())

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
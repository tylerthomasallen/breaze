import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store';
import jwt_decode from'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout, getCurrentUser } from './actions/user_actions';

import '../src/assets/styles/parent.scss';
import { loadApp } from './actions/loading_actions';
import { getFavorites } from './actions/giph_actions';

document.addEventListener('DOMContentLoaded', async () => {
  let store;

  // FOR KEEPING A USER LOGGED IN

  // if a returning user has a session token stored in local storage
  // if (localStorage.jwtToken) {
    
  //   // set the token as a common header for all axios requests
  //   setAuthToken(localStorage.jwtToken)

  //   // decode the token to obtain the users information
  //   const decodedUser = jwt_decode(localStorage.jwtToken);
  //   const { email, id } = decodedUser;

  //   // authenticate the current user
  //   const preloadedState = { user: { isAuthenticated: true } }

  //   // configure our redux store with preloadedState;
  //   store = configureStore(preloadedState);
  //   debugger;

  //   // get our current user and their favorites
  //   await store.dispatch(getCurrentUser(email));
  //   await store.dispatch(getFavorites(id));

  //   // logout our current user if the cookie is expired
  //   const currentTime = Date.now() / 1000;

  //   if (decodedUser.exp < currentTime) {
  //     store.dispatch(logout());
  //     window.location.href = '/login'
  //   }

  // } else {

  //   // configure our redux store with no preloaded state;
  //   store = configureStore();
   
  // }

  store = configureStore();

  // do any actions needed to load the app, i.e. get trending giphs
  await store.dispatch(loadApp());



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
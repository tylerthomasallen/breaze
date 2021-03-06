import { setAuthToken, requestSignup, requestLogin, requestCurrentUser } from '../util/session_api_util';
import { getFavorites, clearFavorites } from './giph_actions';

export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_CLEAR_ERRORS = 'RECEIVE_CLEAR_ERRORS'

export const loginUser = payload => ({
  type: RECEIVE_USER_LOGIN,
  payload
});

export const receiveClearErrors = () => ({
  type: RECEIVE_CLEAR_ERRORS
})

export const receiveErrors = payload => ({
  type: RECEIVE_ERRORS,
  payload
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
})

export const clearErrors = () => dispatch => (
  dispatch(receiveClearErrors())
)

export const getCurrentUser = (email) => dispatch => (
  requestCurrentUser(email).then(res => {
    dispatch(receiveCurrentUser( { ...res.data } ) )
  })
)

export const signup = user => dispatch => (
  requestSignup(user).then(res => {
    const { token, favorites, email, id } = res.data;
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('email', user.email)
    setAuthToken(token);
    dispatch(loginUser({favorites, email, id}))
  })
  .catch(err => {
    dispatch(receiveErrors(err.response.data))
  })
);

export const login = user => dispatch => (
  requestLogin(user).then(res => {
    const { token, favorites, email, id } = res.data;
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('email', user.email);
    localStorage.setItem('id', user.id);
    setAuthToken(token);
    dispatch(loginUser( { favorites, email, id } ) )
    dispatch(getFavorites(id))
  })
  .catch(err => {
    dispatch(receiveErrors(err.response.data));
  })
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('email');
  setAuthToken(false);
  dispatch(logoutUser());
  dispatch(clearFavorites())
};
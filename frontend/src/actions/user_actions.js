import { setAuthToken, requestSignup, requestLogin } from '../util/session_api_util';

export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const loginUser = payload => ({
  type: RECEIVE_USER_LOGIN,
  payload
});

export const receiveErrors = payload => ({
  type: RECEIVE_ERRORS,
  payload
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => (
  requestSignup(user).then(res => {
    const { token, favorites } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(loginUser({favorites}))
  }), err => (
    dispatch(receiveErrors(err.response.data))
  )
);

export const login = user => dispatch => (
  requestLogin(user).then(res => {
    const { token, favorites } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(loginUser({favorites}))
  })
  .catch(err => {
    dispatch(receiveErrors(err.response.data));
  })
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(logoutUser())
};
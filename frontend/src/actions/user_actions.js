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

export const signupUser = user => dispatch => (
  requestSignup(user).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(loginUser(user))
  }), err => (
    dispatch(receiveErrors(err.response.data))
  )
);

export const login = user => dispatch => (
  requestLogin(user).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(loginUser(user))
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
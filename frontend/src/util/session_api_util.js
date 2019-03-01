import axios from 'axios';

// setting or deleting a common header with the users Bearer token if it's passed in
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const requestSignup = (userData) => {
  debugger;
  return axios.post('/api/users/signup', userData);
};

export const requestLogin = (userData) => {
  debugger;
  return axios.post('/api/users/login', userData);
};
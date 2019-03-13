import axios from 'axios';

export const requestTrending = (offset) => {
  return axios.get('/api/giphs/trending', {
    params: {
      offset
    }
  });
};

export const requestSearch = (query, offset) => {
  debugger;
  return axios.get('/api/giphs/search', {
    params: {
      query,
      offset
    }
  })
}

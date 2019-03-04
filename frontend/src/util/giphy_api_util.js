import axios from 'axios';

export const requestTrending = () => {
  return axios.get('/api/giphs/trending');
};

export const requestSearch = (query) => {
  return axios.get('/api/giphs/search', {
    params: {
      query
    }
  })
}

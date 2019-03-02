import axios from 'axios';

export const requestTrending = () => {
  return axios.get('/api/giphs/trending');
};

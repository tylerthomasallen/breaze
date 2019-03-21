import axios from 'axios';

export const requestTrending = offset => {
  return axios.get('/api/giphs/trending', {
    params: {
      offset
    }
  });
};

export const requestSearch = (query, offset) => {
  return axios.get('/api/giphs/search', {
    params: {
      query,
      offset
    }
  });
};

export const requestAddFavorite = (user, giph) => {
  debugger
  return axios.post('/api/giphs/addfavorite', {
    params: {
      user,
      giph
    }
  })
};

export const requestGetFavorites = id => {
  debugger;
  return axios.get(`/api/giphs/getfavorites?id=${id}`)
};

export const requestDeleteFavorite = (user, giph) => {
  debugger;
  return axios.delete('/api/giphs/deletefavorite', {
    params: {
      user,
      giph
    }
  })
}

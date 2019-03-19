import { requestTrending, requestSearch, requestAddFavorite, requestGetFavorites } from "../util/giphy_api_util";

export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveFavorites = payload => ({
  type: RECEIVE_FAVORITES,
  payload
})

export const receiveClearSearch = () => ({
  type: CLEAR_SEARCH
})

export const receiveTrending = payload => ({
  type: RECEIVE_TRENDING,
  payload
});

export const receiveSearch = payload => ({
  type: RECEIVE_SEARCH,
  payload
})

export const clearSearch = () => dispatch => {
  return dispatch(receiveClearSearch())
}

export const getTrending = (offset) => dispatch => {
  
  return(
    requestTrending(offset).then(res => {
      const { data } = res;
      dispatch(receiveTrending(data))
    })
  )
}

export const getSearch = (query, offset) => dispatch => {
  return(
    requestSearch(query, offset).then(res => {
      const { data } = res;
      dispatch(receiveSearch(data));
    })
  )
}

export const getFavorites = id => async dispatch => {
  const res = await requestGetFavorites(id);
  const { favorites } = res.data;
  dispatch(receiveFavorites(favorites))
}

export const addFavorite = (user, giph) => dispatch => (
  requestAddFavorite(user, giph).then(res => {
    if (res.status === 200) {
      debugger;
      dispatch(getFavorites(user.id))
    }
  })
)


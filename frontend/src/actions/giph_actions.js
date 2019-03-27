import { requestTrending, requestSearch, requestAddFavorite, requestDeleteFavorite, requestGetFavorites } from "../util/giphy_api_util";

export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const RECEIVE_SEARCH_TERM = 'RECEIVE_SEARCH_TERM';


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

export const receiveSearchTerm = payload => ({
  type: RECEIVE_SEARCH_TERM,
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
      debugger;
      dispatch(receiveSearch(data));
      dispatch(receiveSearchTerm(query))
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
      dispatch(getFavorites(user.id))
    }
  })
)

export const deleteFavorite = (user, giph) => dispatch => (
  requestDeleteFavorite(user, giph).then(res => {
    if (res.status === 200) {
      dispatch(getFavorites(user.id))
    }
    debugger;
  })
)

export const clearFavorites = () => dispatch => {
  return(
    dispatch(receiveFavorites( { array: [] } ) )
  )
}


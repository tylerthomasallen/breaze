import { requestTrending, requestSearch } from "../util/giphy_api_util";

export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

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


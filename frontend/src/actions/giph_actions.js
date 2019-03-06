import { requestTrending, requestSearch } from "../util/giphy_api_util";

export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveTrending = payload => ({
  type: RECEIVE_TRENDING,
  payload
});

export const receiveSearch = payload => ({
  type: RECEIVE_SEARCH,
  payload
})

export const getTrending = () => dispatch => (
  requestTrending().then(res => {
    const { data } = res;
    dispatch(receiveTrending(data))
  })
)

export const getSearch = (query) => dispatch => (
  requestSearch(query).then(res => {
    const { data } = res;
    dispatch(receiveSearch(data));
  })
)

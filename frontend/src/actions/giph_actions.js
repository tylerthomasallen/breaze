import { requestTrending } from "../util/giphy_api_util";

export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';

export const receiveTrending = payload => ({
  type: RECEIVE_TRENDING,
  payload
});

export const getTrending = () => dispatch => (
  requestTrending().then(res => {
    const { data } = res;
    dispatch(receiveTrending(data))
  }), err => {
    console.log(err)
  }
)


import { getTrending } from "./giph_actions";

export const RECEIVE_LOADING = "RECEIVE_LOADING";

export const receiveLoading = (payload) => ({
  type: RECEIVE_LOADING,
  payload
});


export const setLoading = (boolean) => dispatch => {
  debugger;
  return dispatch(receiveLoading(boolean))
}


export const loadApp = () => async dispatch => (
  await dispatch(getTrending())
)
import { getTrending } from "./giph_actions";

export const loadApp = () => async dispatch => (
  await dispatch(getTrending(0))
)
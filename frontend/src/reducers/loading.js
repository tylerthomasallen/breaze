import { LOADING_STATE } from '../shared/reducer_preloaded_state'

const loadingReducer = (state = LOADING_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default loadingReducer;
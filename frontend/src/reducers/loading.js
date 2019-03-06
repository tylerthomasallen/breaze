import { LOADING_STATE } from '../shared/reducer_preloaded_state'
import { RECEIVE_LOADING } from '../actions/loading_actions';

const loadingReducer = (state = LOADING_STATE, action) => {
  switch (action.type) {
    case RECEIVE_LOADING:
      debugger;
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
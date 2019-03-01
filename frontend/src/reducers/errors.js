import { ERRORS_STATE } from '../shared/reducer_preloaded_state';
import { RECEIVE_ERRORS } from '../actions/user_actions';

const errorsReducer = (state = ERRORS_STATE, action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.payload
    default:
      return state;
  }
}

export default errorsReducer;
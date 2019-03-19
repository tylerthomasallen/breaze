import { ERRORS_STATE } from '../shared/reducer_preloaded_state';
import { RECEIVE_ERRORS, RECEIVE_CLEAR_ERRORS } from '../actions/user_actions';

const errorsReducer = (state = ERRORS_STATE, action) => {
  switch(action.type) {
    
    case RECEIVE_ERRORS:
      return action.payload
    
    case RECEIVE_CLEAR_ERRORS:
      return ERRORS_STATE
    
    default:
      return state;
  }
}

export default errorsReducer;
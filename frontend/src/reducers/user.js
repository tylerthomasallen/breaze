import { USER_STATE } from '../shared/reducer_preloaded_state';
import { RECEIVE_USER_LOGOUT, RECEIVE_USER_LOGIN, RECEIVE_CURRENT_USER } from '../actions/user_actions';

const userReducer = (state = USER_STATE, action) => {
  switch(action.type) {

    case RECEIVE_USER_LOGIN: 
      debugger;
      return {...action.payload, isAuthenticated: true }

    case RECEIVE_USER_LOGOUT:
      return { ...USER_STATE }

    case RECEIVE_CURRENT_USER:
      return { ...state, ...action.payload }

    default:
      return state;
  }
}

export default userReducer;
import { GIPH_STATE } from '../shared/reducer_preloaded_state';
import { RECEIVE_TRENDING } from '../actions/giph_actions';

const giphReducer = (state = GIPH_STATE, action) => {
  switch(action.type) {
    case RECEIVE_TRENDING:
      const { trending } = state;
      const newTrending = trending.concat(action.payload)
      return { trending: newTrending }
    default:
      return state;
  }
}

export default giphReducer;
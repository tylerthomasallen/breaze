import { GIPH_STATE } from '../shared/reducer_preloaded_state';
import { RECEIVE_TRENDING, RECEIVE_SEARCH } from '../actions/giph_actions';

const giphReducer = (state = GIPH_STATE, action) => {
  switch(action.type) {
    
    case RECEIVE_TRENDING:
      const { trending } = state;
      const newTrending = trending.concat(action.payload)
      return { ...state, trending: newTrending }
    
    case RECEIVE_SEARCH:
      return { ...state, searchResults: action.payload }
    
    default:
      return  { ...state }
  }
}

export default giphReducer;
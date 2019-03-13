import { GIPH_STATE } from '../shared/reducer_preloaded_state';
import { RECEIVE_TRENDING, RECEIVE_SEARCH, CLEAR_SEARCH } from '../actions/giph_actions';

const giphReducer = (state = GIPH_STATE, action) => {
  switch(action.type) {
    
    case RECEIVE_TRENDING:
      const { trending } = state;
      const newTrending = trending.concat(action.payload)
      return { ...state, trending: newTrending }
    
    case RECEIVE_SEARCH:
      const { searchResults } = state;
      const newSearch = searchResults.concat(action.payload)
      return { ...state, searchResults: newSearch }

    case CLEAR_SEARCH:
      debugger;
      return { ...state, searchResults: [] }
    
    default:
      return  { ...state }
  }
}

export default giphReducer;
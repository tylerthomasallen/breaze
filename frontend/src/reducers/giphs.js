import { GIPH_STATE } from '../shared/reducer_preloaded_state';
import { RECEIVE_TRENDING, RECEIVE_SEARCH, CLEAR_SEARCH, RECEIVE_FAVORITES, RECEIVE_SEARCH_TERM } from '../actions/giph_actions';

const giphReducer = (state = GIPH_STATE, action) => {
  switch(action.type) {
    
    case RECEIVE_TRENDING:
      const { trending } = state;
      const newTrending = trending.concat(action.payload);
      return { ...state, trending: newTrending }
      
    case RECEIVE_SEARCH:
      Object.freeze(state);
      const { searchResults } = state;
      const newSearch = { ...searchResults, ...action.payload }
      
      // localStorage.setItem('searchResults', JSON.stringify(newSearch))
      debugger;
      
      return { ...state, searchResults: newSearch }

    case RECEIVE_SEARCH_TERM:
      localStorage.setItem('searchTerm', JSON.stringify(action.payload))
      
      return { ...state, searchTerm: action.payload }

    case RECEIVE_FAVORITES:
      return { ...state, favorites: action.payload }

    case CLEAR_SEARCH:
      localStorage.setItem('searchResults', "")
      localStorage.setItem('searchTerm', "")

      return { ...state, searchResults: {}, searchTerm: "" }
    
    default:
      return  { ...state }
  }
}

export default giphReducer;
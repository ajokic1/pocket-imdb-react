import { FILTER_MOVIES, SET_LOADING, SET_MOVIES, SET_POPULAR, UPDATE_MOVIE } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  filters: {},
  current_page: 1,
  last_page: 1,
  total: 0,
  data: [],
  popular: [],
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, ...action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case FILTER_MOVIES:
      return { ...state, filters: { ...state.filters, ...action.payload } }
    case UPDATE_MOVIE:
      const newData = state.data.map(movie => 
        movie.id == action.payload.id ? { ...movie, ...action.payload } : movie);
      return { ...state, data: newData };
    case SET_POPULAR:
      return { ...state, popular: action.payload }
    default:
      return state;
  }
};

export default movieReducer;

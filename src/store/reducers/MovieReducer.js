import { SEARCH_MOVIES, SET_LOADING, SET_MOVIES } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  search: "",
  current_page: 1,
  last_page: 1,
  total: 0,
  data: []
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, ...action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SEARCH_MOVIES:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default movieReducer;

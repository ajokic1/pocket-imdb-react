import { SET_MOVIE, SET_MOVIE_LOADING } from "../actions/ActionTypes";

const initialState = {
  loading: false,
};

const singleMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return { ...state, ...action.payload };
    case SET_MOVIE_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default singleMovieReducer;

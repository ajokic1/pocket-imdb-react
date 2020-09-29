import { GET_MOVIE, GET_MOVIES, SET_LOADING, SET_MOVIES, FILTER_MOVIES } from "./ActionTypes";

export const getMovies = page => {
  return {
    type: GET_MOVIES,
    payload: page,
  };
};

export const setMovies = (payload) => {
  return {
    type: SET_MOVIES,
    payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const getMovie = (payload) => {
  return {
    type: GET_MOVIE,
    payload,
  };
};

export const filterMovies = filters => {
  return {
    type: FILTER_MOVIES,
    payload: filters
  }
}

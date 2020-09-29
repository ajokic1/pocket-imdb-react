import { GET_MOVIES, SEARCH_MOVIES, SET_LOADING, SET_MOVIES } from "./ActionTypes";

export const getMovies = page => {
  return {
    type: GET_MOVIES,
    payload: page,
  };
};

export const searchMovies = search => {
  return {
    type: SEARCH_MOVIES,
    payload: search,
  };
}

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

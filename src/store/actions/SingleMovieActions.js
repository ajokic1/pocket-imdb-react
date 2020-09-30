import { GET_MOVIE, SET_MOVIE, SET_MOVIE_LOADING } from "./ActionTypes";

export const getMovie = (payload) => {
  return {
    type: GET_MOVIE,
    payload,
  };
};

export const setMovie = (payload) => {
  return {
    type: SET_MOVIE,
    payload,
  };
};

export const setMovieLoading = (payload) => {
  return {
    type: SET_MOVIE_LOADING,
    payload,
  };
};


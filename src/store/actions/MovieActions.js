import {
  GET_MOVIE,
  GET_MOVIES,
  SET_LOADING,
  SET_MOVIES,
  RATE_MOVIE,
  UPDATE_MOVIE,
  FILTER_MOVIES,
  SET_POPULAR,
} from "./ActionTypes";

export const getMovies = (page) => {
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

export const updateMovie = (payload) => {
  return {
    type: UPDATE_MOVIE,
    payload,
  };
};

export const rateMovie = (id, value) => {
  return {
    type: RATE_MOVIE,
    payload: { id, value },
  };
};

export const filterMovies = filters => {
  return {
    type: FILTER_MOVIES,
    payload: filters
  };
};

export const setPopular = payload => {
  return {
    type: SET_POPULAR,
    payload
  };
};

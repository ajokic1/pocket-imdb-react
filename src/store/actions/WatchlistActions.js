import { ADD_WATCHLIST, GET_WATCHLIST, REMOVE_WATCHLIST, SET_WATCHLIST, SET_WATCHED } from "./ActionTypes";

export const addToWatchlist = (id) => {
  return {
    type: ADD_WATCHLIST,
    payload: id,
  };
};

export const removeFromWatchlist = (id) => {
  return {
    type: REMOVE_WATCHLIST,
    payload: id,
  };
};

export const getWatchlist = () => {
  return {
    type: GET_WATCHLIST
  };
};

export const setWatchlist = (payload) => {
  return {
    type: SET_WATCHLIST,
    payload,
  };
};

export const setWatched = (id, watched) => {
  return {
    type: SET_WATCHED,
    payload: { id, watched },
  };
};
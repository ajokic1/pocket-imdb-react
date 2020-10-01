import {
  ADD_COMMENT,
  APPEND_COMMENTS,
  GET_COMMENTS,
  LOAD_MORE_COMMENTS,
  SET_COMMENTS,
  SET_COMMENT_LOADING,
} from "./ActionTypes";

export const getComments = (movie_id) => {
  return {
    type: GET_COMMENTS,
    payload: movie_id,
  };
};

export const setComments = (payload) => {
  return {
    type: SET_COMMENTS,
    payload,
  };
};

export const appendComments = (payload) => {
  return {
    type: APPEND_COMMENTS,
    payload,
  };
};

export const loadMoreComments = (movie_id) => {
  return {
    type: LOAD_MORE_COMMENTS,
    payload: movie_id,
  };
};

export const setLoading = (isLoading) => {
  return {
    type: SET_COMMENT_LOADING,
    payload: isLoading,
  };
};

export const addComment = (movie_id, content) => {
  return {
    type: ADD_COMMENT,
    payload: { movie_id, content },
  };
};

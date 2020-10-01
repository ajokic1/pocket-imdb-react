import { all, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  REGISTER,
  GET_MOVIES,
  LOGOUT,
  GET_GENRES,
  FILTER_MOVIES,
  RATE_MOVIE,
  GET_MOVIE,
  GET_COMMENTS,
  LOAD_MORE_COMMENTS,
  ADD_COMMENT, 
  ADD_WATCHLIST, 
  REMOVE_WATCHLIST, 
  GET_WATCHLIST, 
  SET_WATCHED
} from "../actions/ActionTypes";
import { userLogin, userRegister, userLogout } from "./AuthSagas";
import { movieGet } from "./SingleMovieSagas";
import { moviesFilter, moviesGet, movieRate } from "./MovieSagas";
import { commentsAdd, commentsGet, commentsLoadMore } from "./CommentSagas";
import { genresGet } from "./GenreSagas";
import { watchlistAdd, watchlistGet, watchlistRemove, watchlistSetWatched } from "./WatchlistSagas";

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(LOGOUT, userLogout),
    
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, movieGet),
    takeLatest(RATE_MOVIE, movieRate),
    takeLatest(GET_GENRES, genresGet),
    takeLatest(FILTER_MOVIES, moviesFilter),
    
    takeLatest(GET_COMMENTS, commentsGet),
    takeLatest(LOAD_MORE_COMMENTS, commentsLoadMore),
    takeLatest(ADD_COMMENT, commentsAdd),
    
    takeLatest(ADD_WATCHLIST, watchlistAdd),
    takeLatest(REMOVE_WATCHLIST, watchlistRemove),
    takeLatest(GET_WATCHLIST, watchlistGet),
    takeLatest(SET_WATCHED, watchlistSetWatched),
  ]);
}

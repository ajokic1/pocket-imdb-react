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
} from "../actions/ActionTypes";
import { userLogin, userRegister, userLogout } from "./AuthSagas";
import { movieGet } from "./SingleMovieSagas";
import { moviesFilter, moviesGet, movieRate } from "./MovieSagas";
import { genresGet } from "./GenreSagas";

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
  ]);
}

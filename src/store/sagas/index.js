import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT, SEARCH_MOVIES, GET_GENRES, FILTER_MOVIES, RATE_MOVIE } from '../actions/ActionTypes';
import { userLogin, userRegister, userLogout } from './AuthSagas';
import { movieGet } from './SingleMovieSagas';
import { moviesFilter, moviesGet, moviesSearch, movieRate } from './MovieSagas';
import { genresGet } from './GenreSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, movieGet),
    takeLatest(SEARCH_MOVIES, moviesSearch),
    takeLatest(RATE_MOVIE, movieRate),
    takeLatest(GET_GENRES, genresGet),
    takeLatest(FILTER_MOVIES, moviesFilter),
  ]);
}

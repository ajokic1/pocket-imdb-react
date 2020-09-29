import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT, SEARCH_MOVIES, RATE_MOVIE } from '../actions/ActionTypes';
import { userLogin, userRegister, userLogout } from './AuthSagas';
import { moviesGet, moviesSearch, movieRate } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(SEARCH_MOVIES, moviesSearch),
    takeLatest(RATE_MOVIE, movieRate),
  ]);
}

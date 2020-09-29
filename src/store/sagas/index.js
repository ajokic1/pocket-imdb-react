import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT, GET_GENRES, FILTER_MOVIES } from '../actions/ActionTypes';
import { userLogin, userRegister, userLogout } from './AuthSagas';
import { genresGet } from './GenreSagas';
import { moviesFilter, moviesGet } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_GENRES, genresGet),
    takeLatest(FILTER_MOVIES, moviesFilter),
  ]);
}

import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT, SEARCH_MOVIES, GET_GENRES } from '../actions/ActionTypes';
import { userLogin, userRegister, userLogout } from './AuthSagas';
import { genresGet } from './GenreSagas';
import { moviesGet, moviesSearch } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(SEARCH_MOVIES, moviesSearch),
    takeLatest(GET_GENRES, genresGet),
  ]);
}

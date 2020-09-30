import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT, GET_MOVIE } from '../actions/ActionTypes';
import { userLogin, userRegister, userLogout } from './AuthSagas';
import { moviesGet } from './MovieSagas';
import { movieGet } from './SingleMovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, movieGet)
  ]);
}

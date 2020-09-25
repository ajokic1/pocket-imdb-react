import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, LOGOUT } from '../actions/ActionTypes';
import { userLogin, userRegister, userLogout } from './AuthSagas';
import { moviesGet } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIES, moviesGet)
  ]);
}

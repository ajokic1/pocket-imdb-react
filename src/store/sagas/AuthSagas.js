import { call, put } from "redux-saga/effects";
import { push, go } from "connected-react-router";

import {
  authUser,
  loginError,
  logoutError,
  registerError,
} from "../actions/AuthActions";
import AuthService from "../../services/AuthService";

export function* userLogin({ payload }) {
  try {
    yield call(AuthService.login, payload);

    yield put(authUser(payload));
    yield put(push("/"));
    yield put(go());
  } catch (error) {
    yield put(loginError(true));
  }
}

export function* userLogout() {
  try {
    yield call(AuthService.logout);

    yield put(authUser(false));
    yield put(push("/login"));
    yield put(go());
  } catch (error) {
    yield put(logoutError(true));
  }
}

export function* userRegister({ payload }) {
  try {
    yield call(AuthService.signup, payload);

    yield put(push("/login"));
    yield put(go());
  } catch (error) {
    yield put(registerError(true));
  }
}

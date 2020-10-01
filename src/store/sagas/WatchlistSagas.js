import { call, put } from "redux-saga/effects";
import { watchlistService } from "../../services/WatchlistService";
import { updateMovie } from "../actions/MovieActions";
import { setWatchlist } from "../actions/WatchlistActions";

export function* watchlistGet({ payload }) {
  try {
    const { data } = yield call(watchlistService.get, payload);
    yield put(setWatchlist(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* watchlistAdd({ payload }) {
  try {
    const { data } = yield call(watchlistService.add, payload);
    yield put(setWatchlist(data));
    yield put(updateMovie({ id: payload, in_watchlist: true }));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* watchlistRemove({ payload }) {
  try {
    const { data } = yield call(watchlistService.remove, payload);
    yield put(setWatchlist(data));
    yield put(updateMovie({ id: payload, in_watchlist: false }));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* watchlistSetWatched({ payload }) {
  try {
    const { data } = yield call(
      watchlistService.setWatched,
      payload.id,
      payload.watched
    );
    yield put(setWatchlist(data));
    yield put(updateMovie({ id: payload.id, watched: payload.watched }));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

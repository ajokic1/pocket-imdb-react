import { call, put, select } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setLoading, setMovies, updateMovie } from '../actions/MovieActions';

export function* moviesGet({ payload }) {
  try {
    yield put(setLoading(true));
    const search = yield select(state => state.movie.search);
    const { data } = yield call(movieService.getMovies, { page: payload, search });

    yield put(setMovies(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* moviesSearch({ payload }) {
  yield call(moviesGet, { page: 1, search: payload});
}

export function* movieRate({ payload }) {
  const { data } = yield call(movieService.rate, payload.id, payload.value);
  yield put(updateMovie(data));
}

export function* movieVisit({ payload }) {
  const { data } = yield call(movieService.visit, payload);
  yield put(updateMovie(data));
}

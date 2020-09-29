import { call, put, select } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setLoading, setMovies } from '../actions/MovieActions';

export function* moviesGet({ payload }) {
  try {
    yield put(setLoading(true));
    const search = yield select(state => state.movie.search);
    const filters = yield select(state => state.movie.filters);
    const { data } = yield call(movieService.getMovies, { page: payload, search, ...filters });

    yield put(setMovies(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* moviesSearch({ payload }) {
  yield call(moviesGet, { payload: 1 });
}

export function* moviesFilter({ payload }) {
  console.log(payload)
  yield call(moviesGet, { payload: 1 });
}

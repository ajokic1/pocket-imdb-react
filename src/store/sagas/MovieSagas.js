import { call, put, select } from 'redux-saga/effects';
import { movieService } from '../../services/MovieService';
import { setLoading, setMovies, updateMovie } from '../actions/MovieActions';

export function* moviesGet({ payload }) {
  try {
    yield put(setLoading(true));
    const filters = yield select(state => state.movies.filters);
    console.log(filters);
    const { data } = yield call(movieService.getMovies, { page: payload, ...filters });

    yield put(setMovies(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* moviesFilter({ payload }) {
  yield call(moviesGet, 1);
}

export function* movieRate({ payload }) {
  const { data } = yield call(movieService.rate, payload.id, payload.value);
  yield put(updateMovie(data));
}


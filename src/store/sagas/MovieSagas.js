import { call, put, select } from 'redux-saga/effects';
import { movieService } from '../../services/MovieService';
import { setLoading, setMovies, setPopular, updateMovie } from '../actions/MovieActions';
import { getWatchlist } from '../actions/WatchlistActions';

export function* moviesGet({ payload }) {
  try {
    yield put(setLoading(true));
    const filters = yield select(state => state.movies.filters);
    const { data } = yield call(movieService.getMovies, { page: payload, ...filters });
    yield put(setMovies(data));
    
    const popular = yield call(movieService.getPopular);
    yield put(setPopular(popular.data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  } finally {
    yield put(setLoading(false));
  }
}

export function* moviesFilter({ payload }) {
  yield call(moviesGet, 1);
}

export function* movieRate({ payload }) {
  const { data } = yield call(movieService.rate, payload.id, payload.value);
  yield put(updateMovie(data));
  yield put(getWatchlist());
}


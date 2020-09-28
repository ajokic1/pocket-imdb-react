import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setLoading, setMovies } from '../actions/MovieActions';

export function* moviesGet({ payload }) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(movieService.getMovies, payload);

    yield put(setMovies(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log({ error }); /*eslint-disable-line*/
  }
}

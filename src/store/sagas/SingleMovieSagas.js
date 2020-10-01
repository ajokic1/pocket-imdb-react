import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovie, setMovieLoading } from '../actions/SingleMovieActions';

export function* movieGet({ payload }) {
  try {
    yield put(setMovieLoading(true));
    const { data } = yield call(movieService.getMovie, payload);

    yield put(setMovie(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  } finally {
    yield put(setMovieLoading(false));
  }
}

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import movieReducer from './MovieReducer';
import singleMovieReducer from './SingleMovieReducer';

export default history =>
  combineReducers({
    authUser: authReducer,
    movie: singleMovieReducer,
    errors: errorReducer,
    movies: movieReducer,
    router: connectRouter(history)
  });

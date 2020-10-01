import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import movieReducer from './MovieReducer';
import genreReducer from './GenreReducer';
import singleMovieReducer from './SingleMovieReducer';
import commentReducer from './CommentReducer';
import watchlistReducer from './WatchlistReducer';

export default history =>
  combineReducers({
    authUser: authReducer,
    movie: singleMovieReducer,
    errors: errorReducer,
    movies: movieReducer,
    genres: genreReducer,
    comments: commentReducer,
    watchlist: watchlistReducer,
    router: connectRouter(history),
  });

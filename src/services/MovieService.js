import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIE: '/api/movies/:id',
};

class MovieService extends ApiService {
  getMovies = (params) => {
    return this.apiClient.get(ENDPOINTS.MOVIES, { params });
  };

  getMovie = (id) => {
    return this.apiClient.get(ENDPOINTS.MOVIE.replace(":id", id));
  }
}

export const movieService = new MovieService();

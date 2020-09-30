import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies?page=:page',
  MOVIE: '/api/movies/:id',
};

class MovieService extends ApiService {
  getMovies = (page=1) => {
    return this.apiClient.get(ENDPOINTS.MOVIES.replace(":page", page));
  };

  getMovie = (id) => {
    return this.apiClient.get(ENDPOINTS.MOVIE.replace(":id", id));
  }
}

export const movieService = new MovieService();

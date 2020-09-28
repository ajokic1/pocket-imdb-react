import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies?page=:page'
};

class MovieService extends ApiService {
  getMovies = (page=1) => {
    return this.apiClient.get(ENDPOINTS.MOVIES.replace(":page", page));
  };
}

export const movieService = new MovieService();

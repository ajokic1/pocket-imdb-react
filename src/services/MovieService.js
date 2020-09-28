import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies'
};

class MovieService extends ApiService {
  getMovies = (page=1) => {
    return this.apiClient.get(ENDPOINTS.MOVIES + "?page=" + page);
  };
}

export const movieService = new MovieService();

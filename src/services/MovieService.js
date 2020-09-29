import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies'
};

class MovieService extends ApiService {
  getMovies = (params) => {
    console.log(params);
    return this.apiClient.get(ENDPOINTS.MOVIES, { params });
  };
}

export const movieService = new MovieService();

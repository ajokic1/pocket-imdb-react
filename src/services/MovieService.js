import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  LIKE: '/api/movies/:id/like',
  DISLIKE: '/api/movies/:id/dislike',
  UNLIKE: '/api/movies/:id/unlike',
  VISIT: '/api/movies/:id/visit',
};

class MovieService extends ApiService {
  getMovies = (params) => {
    return this.apiClient.get(ENDPOINTS.MOVIES, { params });
  };

  rate = (id, value) => {
    let endpoint;
    if (value === 1) endpoint = ENDPOINTS.LIKE;
    else if (value === 0) endpoint = ENDPOINTS.UNLIKE;
    else endpoint = ENDPOINTS.DISLIKE;
    return this.apiClient.post(endpoint.replace(':id', id));
  }

  visit = (id) => {
    return this.apiClient.post(ENDPOINTS.VISIT.replace(':id', id));
  }
}

export const movieService = new MovieService();

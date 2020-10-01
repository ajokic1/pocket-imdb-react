import ApiService from "./ApiService";

const ENDPOINTS = {
  MOVIES: "/api/movies",
  LIKE: "/api/movies/:id/like",
  DISLIKE: "/api/movies/:id/dislike",
  UNLIKE: "/api/movies/:id/unlike",
  MOVIE: "/api/movies/:id",
  POPULAR: "/api/movies/popular",
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

    return this.apiClient.post(endpoint.replace(":id", id));
  };

  getMovie = (id) => {
    return this.apiClient.get(ENDPOINTS.MOVIE.replace(":id", id));
  };

  getPopular = () => {
    return this.apiClient.get(ENDPOINTS.POPULAR);
  }
}

export const movieService = new MovieService();

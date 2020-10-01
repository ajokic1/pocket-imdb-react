import ApiService from "./ApiService";
import { LIKE, DISLIKE, UNLIKE } from "../constants";

const ENDPOINTS = {
  MOVIES: "/api/movies",
  [LIKE.toString()]: "/api/movies/:id/like",
  [DISLIKE.toString()]: "/api/movies/:id/dislike",
  [UNLIKE.toString()]: "/api/movies/:id/unlike",
  MOVIE: "/api/movies/:id",
};

class MovieService extends ApiService {
  getMovies = (params) => {
    return this.apiClient.get(ENDPOINTS.MOVIES, { params });
  };

  rate = (id, value) => {
    return this.apiClient.post(ENDPOINTS[value].replace(":id", id));
  };

  getMovie = (id) => {
    return this.apiClient.get(ENDPOINTS.MOVIE.replace(":id", id));
  };
}

export const movieService = new MovieService();

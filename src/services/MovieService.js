import ApiService from "./ApiService";
import EchoService from "./EchoService";
import { LIKE, DISLIKE, UNLIKE } from "../constants";

const ENDPOINTS = {
  MOVIES: "/api/movies",
  [LIKE.toString()]: "/api/movies/:id/like",
  [DISLIKE.toString()]: "/api/movies/:id/dislike",
  [UNLIKE.toString()]: "/api/movies/:id/unlike",
  MOVIE: "/api/movies/:id",
  POPULAR: "/api/movies/popular",
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

  getPopular = () => {
    return this.apiClient.get(ENDPOINTS.POPULAR);
  }

  create = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title)
      formData.append('description', data.description)
      data.genres.map(genre => formData.append('genres[]', genre))
      formData.append('image_url', data.image_url)
      formData.append('image', data.image[0])
      await this.apiClient.post(ENDPOINTS.MOVIES, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return { done: true } 
    } catch (error) {
      return { errors: [error.message] }
    }
  }

  listenLikes(movieId, updateMovie) {
    EchoService.private(`movies.${movieId}.likes`).listen("NewLikeEvent", (movie) => {
      updateMovie(movie);
    });
  }

  leaveLikes(movieId) {
    if (movieId) EchoService.leave(`movies.${movieId}.likes`)
  }
}

export const movieService = new MovieService();

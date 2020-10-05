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
}

export const movieService = new MovieService();

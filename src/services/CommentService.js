import ApiService from "./ApiService";

const ENDPOINTS = {
  COMMENTS: "/api/movies/:id/comments",
};

class CommentService extends ApiService {
  getComments(movie_id, page) {
    return this.apiClient.get(ENDPOINTS.COMMENTS.replace(":id", movie_id), {
      params: { page },
    });
  }
}

export const commentService = new CommentService();

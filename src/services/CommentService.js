import ApiService from "./ApiService";

const ENDPOINTS = {
  COMMENTS: "/api/movies/:id/comments",
};

class CommentService extends ApiService {
  getComments = (movie_id, page) => {
    return this.apiClient.get(ENDPOINTS.COMMENTS.replace(":id", movie_id), {
      params: { page },
    });
  };

  addComment = ({ movie_id, content }) => {
    return this.apiClient.post(ENDPOINTS.COMMENTS.replace(":id", movie_id), {
      content,
    });
  };
}

export const commentService = new CommentService();

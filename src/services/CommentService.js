import ApiService from "./ApiService";
import EchoService from "./EchoService";

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

  listen(movieId, appendComments) {
    EchoService.private(`movies.${movieId}.comments`).listen("NewCommentEvent", (comment) => {
      appendComments({ data: [comment] });
    });
  }

  leave(movieId) {
    if (movieId) EchoService.leave(`movies.${movieId}.comments`)
  }
}

export const commentService = new CommentService();

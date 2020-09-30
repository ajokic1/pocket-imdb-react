import React, { useEffect } from "react";
import Loader from "../Loader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getComments,
  loadMoreComments,
  addComment,
} from "../../store/actions/CommentActions";
import Comment from "./Comment";
import AddComment from "./AddComment";

function Comments({
  movie,
  addComment,
  comments,
  getComments,
  loadMoreComments,
}) {
  useEffect(() => {
    if (movie.id) getComments(movie.id);
  }, [movie]);

  function loadMore() {
    loadMoreComments(movie.id);
  }

  const commentList = comments.data.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));

  return (
    <div>
      <div className="mb-4">
        <AddComment movie={movie} addComment={addComment} />
      </div>
      {commentList}
      {comments.loading && (
        <div className="text-center">
          <Loader />
        </div>
      )}
      <div className="text-center">
        <div onClick={loadMore} className="mx-auto btn btn-outline-secondary">
          Load more
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = {
  getComments,
  loadMoreComments,
  addComment,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Comments)
);

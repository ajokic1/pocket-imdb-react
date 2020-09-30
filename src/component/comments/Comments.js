import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getComments, loadMoreComments } from '../../store/actions/CommentActions';
import Comment from './Comment';

function Comments({ movie, comments, getComments, loadMoreComments }) {
  useEffect(() => {
    getComments(movie.id);
  }, [])
  
  const commentList = comments.data.map(comment => <Comment key={comment.id} comment={comment} />)

  return (
    <div>
      {commentList}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    comments: state.comment,
  };
};

const mapDispatchToProps = {
  getComments,
  loadMoreComments,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));

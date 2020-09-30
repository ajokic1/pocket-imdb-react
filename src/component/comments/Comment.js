import React from "react";

function Comment({ comment }) {
  return (
    <div className="mb-3">
      <p>
        <strong>{comment.user.name}</strong>
      </p>
      <p>{comment.content}</p>
    </div>
  );
}

export default Comment;

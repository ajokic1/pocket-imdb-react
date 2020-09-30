import React from "react";

function Comment({ comment }) {
  return (
    <div className="mb-3">
      <div>
        <strong>{comment.user.name}</strong>
      </div>
      <p>{comment.content}</p>
    </div>
  );
}

export default Comment;

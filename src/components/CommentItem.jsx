import React from "react";

export default function CommentItem({ comment }) {
  return (
    <div className="post">
      <div className="post__content">
        <h3 className="post__title">{comment.name}</h3>
        <div className="post__body">{comment.body}</div>
      </div>
      <div className="post__btns"></div>
    </div>
  );
}

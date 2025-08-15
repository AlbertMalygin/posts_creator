import React from "react";
import CommentItem from "./CommentItem";

export default function PostCommentsList({ comments, listTitle }) {
  return (
    <div className="posts-list">
      <h3>{comments.length ? listTitle : "Комментарии не найдены!"}</h3>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

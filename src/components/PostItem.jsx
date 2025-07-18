import React from "react";
import MyButton from "./UI/button/MyButton";

export default function PostItem({ removePost, number, post }) {
  return (
    <div className="post">
      <div className="post__content">
        <h3 className="post__title">
          {number}. {post.title}
        </h3>
        <div className="post__body">{post.body}</div>
        <div className="post__date">{post.date.toString()}</div>
      </div>
      <MyButton
        onClick={() => {
          removePost(post);
        }}
      >
        Удалить
      </MyButton>
    </div>
  );
}

import React from "react";
import PostItem from "./PostItem";

export default function PostList({ removePost, posts, listTitle }) {
  return (
    <div className="posts-list">
      <h2>{posts.length ? listTitle : "Посты не найдены!"}</h2>
      {posts.map((post, index) => (
        <PostItem
          removePost={removePost}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}

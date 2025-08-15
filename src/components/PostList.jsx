import React from "react";
import PostItem from "./PostItem";

export default function PostList({ editPost, removePost, posts, listTitle }) {
  return (
    <div className="posts-list">
      <h2>{posts.length ? listTitle : "Посты не найдены!"}</h2>
      {posts.map((post) => (
        <PostItem
          editPost={editPost}
          removePost={removePost}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}

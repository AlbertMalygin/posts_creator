import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

export default function PostEditor({ formTitle, setVisible, editPost, post }) {
  const [editedPost, setEditedPost] = useState({ ...post });

  return (
    <form className="form">
      <h2>{formTitle}</h2>
      <MyInput
        value={editedPost.title}
        onChange={(e) =>
          setEditedPost({ ...editedPost, title: e.target.value })
        }
      />
      <MyInput
        value={editedPost.body}
        onChange={(e) => setEditedPost({ ...editedPost, body: e.target.value })}
      />
      <div className="form__btns">
        <MyButton
          onClick={(e) => {
            e.preventDefault();
            editPost(editedPost);
            setVisible(false);
          }}
        >
          Готово
        </MyButton>
        <MyButton
          onClick={(e) => {
            e.preventDefault();
            setVisible(false);
          }}
        >
          Отмена
        </MyButton>
      </div>
    </form>
  );
}

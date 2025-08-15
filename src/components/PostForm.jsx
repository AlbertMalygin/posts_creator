import React from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

export default function PostForm({ formTitle, addPost }) {
  function createPost(e) {
    e.preventDefault();

    const title = e.target.form[0].value;
    const body = e.target.form[1].value;
    const date = new Date().toLocaleString("ru");

    if (!title || !body) return;

    const newPost = {
      id: Date.now(),
      title: title,
      body: body,
      date: date,
      edited: false,
    };

    addPost(newPost);

    e.target.form[0].value = "";
    e.target.form[1].value = "";
  }
  return (
    <form className="form">
      <h2>{formTitle}</h2>
      <MyInput placeholder="Заголовок..." />
      <MyInput placeholder="Содержание..." />
      <div className="form__btns">
        <MyButton onClick={createPost}>Создать</MyButton>
      </div>
    </form>
  );
}

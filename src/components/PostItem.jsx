import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import PostEditor from "./PostEditor";
import MyModal from "./UI/MyModal/MyModal";
import { useNavigate } from "react-router";

export default function PostItem({ editPost, removePost, post }) {
  const [editorModal, setEditorModal] = useState(false);
  const navigate = useNavigate();
  function openPost() {
    navigate("/posts/" + post.id);
  }
  return (
    <div className="post">
      <div className="post__content">
        <h3 className="post__title">{post.title}</h3>
        <div className="post__body">{post.body}</div>
        <div className="post__date">
          {(post.edited ? "Отредактировано: " : "Опубликовано: ") +
            (post.date || new Date().toLocaleString("ru"))}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => setEditorModal(true)}>Редактировать</MyButton>
        <MyButton
          onClick={() => {
            removePost(post);
          }}
        >
          Удалить
        </MyButton>
        <MyButton onClick={openPost}>Подробнее...</MyButton>
      </div>

      {editorModal ? (
        <MyModal setVisible={setEditorModal}>
          <PostEditor
            formTitle={"Редактирование поста"}
            setVisible={setEditorModal}
            editPost={editPost}
            post={post}
          />
        </MyModal>
      ) : null}
    </div>
  );
}

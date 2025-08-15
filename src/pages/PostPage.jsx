import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import PostCommentsList from "../components/PostCommentsList";
import MyButton from "../components/UI/button/MyButton";

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  function returnBack() {
    navigate("/posts");
  }

  const [fetchPostById, isLoading, error] = useFetch(async (id) => {
    const responce = await PostService.getPostById(id);
    setPost(responce.data);
  });

  const [fetchComments, isCommentsLoading, comError] = useFetch(async (id) => {
    const responce = await PostService.getPostComments(id);
    setComments(responce.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div className="postPage pageContent">
      {isLoading || isCommentsLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{post.title}</h1>
          <PostCommentsList comments={comments} listTitle={"Комментарии:"} />
          <MyButton onClick={returnBack}>Назад</MyButton>
        </>
      )}
    </div>
  );
}

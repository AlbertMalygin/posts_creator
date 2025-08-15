import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetch } from "../hooks/useFetch";
import { getPagesArray, getPagesCount } from "../utils/pages";
import PagesNavigation from "../components/UI/PageNavigation/PagesNavigation";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [createPostModal, setCreatePostModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  let pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  function getFormettedDate(locale) {
    const formattedDate = new Date().toLocaleString(locale);
    return formattedDate;
  }

  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
    setCreatePostModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function editPost(editedPost) {
    const postToEdit = posts.find((post) => post.id === editedPost.id);
    if (postToEdit) {
      postToEdit.title = editedPost.title;
      postToEdit.body = editedPost.body;
      postToEdit.date = getFormettedDate("ru");
      postToEdit.edited = true;
    }
  }

  return (
    <div className="App">
      <div className="header__btns">
        <MyButton onClick={() => setCreatePostModal(true)}>
          Создать пост
        </MyButton>
        <MyButton>Авторизоваться</MyButton>
      </div>
      <hr className="hr" />
      <PostFilter filter={filter} setFilter={setFilter} />
      {!isPostsLoading ? (
        <>
          <PostList
            removePost={removePost}
            editPost={editPost}
            posts={sortedAndSearchedPosts}
            listTitle="Список постов"
          />
          <PagesNavigation
            choosePage={setPage}
            currentPage={page}
            totalPages={pagesArray}
          />
        </>
      ) : (
        <Loader />
      )}

      {postError && console.log(postError)}
      {createPostModal && (
        <MyModal visible={createPostModal} setVisible={setCreatePostModal}>
          <PostForm addPost={addNewPost} formTitle="Создание поста" />
        </MyModal>
      )}
    </div>
  );
}

export default Posts;

import { useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "2.Discription. Some text about javascript. Some text about javascript. Some text about javascript. Some text about javascript. Some text about javascript. Some text about javascript.",
    },
    {
      id: 2,
      title: "Javascript2",
      body: "3.Discription2",
    },
    {
      id: 3,
      title: "Javascript3",
      body: "1.Discription3",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function sortPosts(sort) {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm addPost={addNewPost} formTitle="Создание поста" />
      <hr className="hr" />
      <MySelect
        onChange={sortPosts}
        value={selectedSort}
        defaultValue={"Сортировка:"}
        options={[
          {
            name: "по заголовку",
            value: "title",
          },
          {
            name: "по описанию",
            value: "body",
          },
        ]}
      />
      <PostList
        removePost={removePost}
        posts={posts}
        listTitle="Список постов"
      />
    </div>
  );
}

export default App;

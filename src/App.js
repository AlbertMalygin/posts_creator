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
      date: getFormettedDate("ru"),
    },
    {
      id: 2,
      title: "Javascript2",
      body: "3.Discription2",
      date: getFormettedDate("ru"),
    },
    {
      id: 3,
      title: "Javascript3",
      body: "1.Discription3",
      date: getFormettedDate("ru"),
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  function getFormettedDate(locale) {
    const formattedDate = new Date().toLocaleString(locale);
    return formattedDate;
  }

  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
    console.log(newPost);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function sortPosts(sort) {
    setSelectedSort(sort);
    if (sort == "new") {
      setPosts([...posts].sort((a, b) => b["date"].localeCompare(a["date"])));
      return;
    }
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
          {
            name: "по дате",
            value: "date",
          },
          {
            name: "сначала новые",
            value: "new",
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

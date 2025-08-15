import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";
import UserPage from "../pages/UserPage";

export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/user_page", component: UserPage, exact: true },
  { path: "/posts/:id", component: PostPage, exact: true },
];

export const publicRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/login", component: Login, exact: true },
];

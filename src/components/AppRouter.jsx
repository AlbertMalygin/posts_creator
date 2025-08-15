import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostPage from "../pages/PostPage";

export default function AppRouter() {
  function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/posts", { replace: true });
    }, [navigate]);

    return null;
  }
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsDetails from "../features/posts/PostsDetails";
import PostsList from "../features/posts/PostsList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostsDetails />} />
      <Route path="/new" element={<h1>Create New Post</h1>} />
    </Routes>
  );
}

export default AppRoutes;
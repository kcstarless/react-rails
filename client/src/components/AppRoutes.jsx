import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsDetails from "../features/posts/PostsDetails";
import PostsList from "../features/posts/PostsList";
import NewPostForm from "../features/posts/NewPostForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostsDetails />} />
      <Route path="/new" element={<NewPostForm />} />
    </Routes>
  );
}

export default AppRoutes;
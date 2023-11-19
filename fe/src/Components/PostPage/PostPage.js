import React from "react";
import "./postsPage.css";

import Post from "./Components/Post";
export default function PostPage() {
  return (
    <>
      <h2>Our Post</h2>
      <ul class="posts">
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </>
  );
}

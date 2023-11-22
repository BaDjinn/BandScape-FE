import React, { useEffect } from "react";
import "./postsPage.css";

import Post from "./Components/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/slices/PostsSlice";
import { Col, Row } from "react-bootstrap";
export default function PostPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <>
      <h2
        className="text-center py-3"
        style={{ fontWeight: 800, fontSize: 40 }}
      >
        Latest News!!
      </h2>
      <ul class="posts">
        <Row className="w-100">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Col key={post.id} xs={12}>
                <Post post={post} />
              </Col>
            ))
          ) : (
            <p></p>
          )}
        </Row>
      </ul>
    </>
  );
}

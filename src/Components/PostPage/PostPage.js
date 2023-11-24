import React, { useEffect, useState } from "react";
import "./postsPage.css";

import Post from "./Components/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/slices/PostsSlice";
import { Col, Row } from "react-bootstrap";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
export default function PostPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const totalPages = useSelector((state) => state.posts.totalPages);
  const [page, setPage] = useState(1);
  const [prevStatus, setPrevStaus] = useState(true);
  const [nextStatus, setNextStatus] = useState(false);
  useEffect(() => {
    dispatch(fetchPost({ page: page }));
  }, [page]);
  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setPrevStaus(page === 1);
    setNextStatus(page === totalPages);
  }, [page, totalPages]);

  return (
    <>
      <h2
        className="text-center py-3"
        style={{ fontWeight: 800, fontSize: 40 }}
      >
        Latest News!!
      </h2>
      <ul className="posts">
        <Row className="w-100">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Col key={post.id + "postPAge"} xs={12}>
                <Post post={post} />
              </Col>
            ))
          ) : (
            <p></p>
          )}
        </Row>
      </ul>
      <div className="d-flex justify-content-center alingn-items-center">
        <button
          className="prevBtn p-2"
          disabled={prevStatus}
          onClick={handlePrevClick}
        >
          <AiOutlineDoubleLeft />
        </button>
        <p className="m-0 p-2">
          {page} | {totalPages}
        </p>
        <button
          className="nextBtn p-2"
          disabled={nextStatus}
          onClick={handleNextClick}
        >
          <AiOutlineDoubleRight />
        </button>
      </div>
    </>
  );
}

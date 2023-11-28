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

      <Row className="w-100">
        {posts.length > 0 ? (
          posts.map((post) => <Post post={post} key={post._id + "postPAge"} />)
        ) : (
          <p></p>
        )}
      </Row>

      <div className="d-flex justify-content-center alingn-items-center">
        <button
          className="btn btn-success fw-bold border-0 text-dark rounded-0 "
          style={{ backgroundColor: "#81d412" }}
          disabled={prevStatus}
          onClick={handlePrevClick}
        >
          <AiOutlineDoubleLeft />
        </button>
        <p className="m-0 p-2">
          {page} | {totalPages}
        </p>
        <button
          className="btn btn-success fw-bold border-0 text-dark rounded-0"
          style={{ backgroundColor: "#81d412" }}
          disabled={nextStatus}
          onClick={handleNextClick}
        >
          <AiOutlineDoubleRight />
        </button>
      </div>
    </>
  );
}

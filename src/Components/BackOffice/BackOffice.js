import axios from "axios";
import "../Login/login.css";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import {
  AiOutlineCheckCircle,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineStop,
} from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPost } from "../../redux/slices/PostsSlice";
import useAuth from "../../Auth/hooks/useAuth";
import ModalAdd from "./components/ModalAdd";
import Post from "../PostPage/Components/Post";
export default function BackOffice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { auth } = useAuth();
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
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            Welcome back {auth.user?.nick}!
          </Col>
          <Col className="text-center">
            <Button
              variant="primary"
              className="btn btn-success fw-bold border-0 text-dark rounded-0"
              style={{ backgroundColor: "#81d412" }}
              onClick={handleShow}
            >
              Add a new post
            </Button>
          </Col>
        </Row>
        <ul className="posts">
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
          <div className="d-flex justify-content-center alingn-items-center">
            <button
              className="btn btn-success fw-bold border-0 text-dark rounded-0"
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
        </ul>
        <ModalAdd show={show} handleClose={handleClose} />
      </Container>
    </>
  );
}

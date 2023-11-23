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
import { AiOutlineCheckCircle, AiOutlineStop } from "react-icons/ai";
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
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            Welcome back {auth.user?.nick}!
          </Col>
          <Col className="text-center">
            <Button variant="primary" onClick={handleShow}>
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
        </ul>
        <ModalAdd show={show} handleClose={handleClose} />
      </Container>
    </>
  );
}

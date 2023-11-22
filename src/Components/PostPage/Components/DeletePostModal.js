import axios from "axios";
import "../../Login/login.css";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Modal,
  Container,
  Form,
  Row,
  Spinner,
  FormLabel,
} from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineStop } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import useAuth from "../../../Auth/hooks/useAuth";
import {
  DeletePost,
  createPost,
  fetchPost,
} from "../../../redux/slices/PostsSlice";

export default function DeletePostModal({ show, handleClose, post }) {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};

    return errors;
  };
  //funzione di controllo del form
  const formik = useFormik({
    initialValues: {},
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");

      try {
        dispatch(DeletePost({ id: post._id })).then((req) => {
          setLoading(false);
          dispatch(fetchPost());
          handleClose();
        });
      } catch (error) {
        setLoading(false);
        setErrorMessage("Errore nel caricamento del post");
      }
    },
  });
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ background: "#202020" }}>
        <Modal.Title>
          <p>Are you sure?</p> <p>Post Title: {post?.title}</p>
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit} className="">
        <Modal.Body style={{ background: "#202020" }}>
          {" "}
          <Row className=" justify-content-center aling-items-center">
            <Col xs={12} md={8} className="py-5">
              <Form.Check // prettier-ignore
                type="checkbox"
                id="delmodal"
                required
                label={`Are you sure you want to delete this post?`}
                className=""
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer
          style={{ background: "#202020" }}
          className="justify-content-center"
        >
          <Row className="w-100 justify-content-between">
            <Col xs={5}>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="h-100 w-100"
              >
                Close
              </Button>
            </Col>
            <Col xs={5}>
              <Button
                type="submit"
                className={`submitBtn btn w-100`}
                disabled={loading}
              >
                Delete
              </Button>
            </Col>
          </Row>
          {errorMessage !== "" ? (
            <Alert variant="danger" className="mt-2">
              {errorMessage}
            </Alert>
          ) : (
            <></>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

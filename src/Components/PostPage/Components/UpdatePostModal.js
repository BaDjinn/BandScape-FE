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
} from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineStop } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import useAuth from "../../../Auth/hooks/useAuth";
import {
  createPost,
  fetchPost,
  upDatePost,
} from "../../../redux/slices/PostsSlice";

export default function UpdatePostModal({ show, handleClose, post }) {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    //validazione Nome
    if (!values.title) {
      errors.title = "Required";
    }
    //Validazione Email
    if (!values.cover) {
      errors.cover = "Required";
    }
    //validazione password
    if (!values.content) {
      errors.content = "Required";
    }

    return errors;
  };
  //funzione di controllo del form
  const formik = useFormik({
    initialValues: {
      title: post.title,
      cover: post.cover,
      content: post.content,
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");

      const dati = {
        title: values.title,

        cover: values.cover,
        content: values.content,
      };

      try {
        dispatch(upDatePost({ data: dati, id: post._id })).then((req) => {
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
        <Modal.Title>Create a new post!</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit} className="registrationForm">
        <Modal.Body style={{ background: "#202020" }}>
          {" "}
          <Row className=" justify-content-center aling-items-center">
            <Col xs={12} md={8} className="py-5">
              <h2></h2>
              <Row>
                <Col xs={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="formRegisterFirstName"
                  >
                    <Form.Label>Title</Form.Label>
                    <div className="inputWrapper">
                      <Form.Control
                        required
                        type="text"
                        name="title"
                        placeholder="Title of the post"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          borderColor:
                            formik.touched.title && formik.errors.title
                              ? "red"
                              : formik.touched.title
                              ? "green"
                              : "#dee2e6",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      <span className="inputIcon">
                        {formik.touched.title && formik.errors.title ? (
                          <AiOutlineStop className="iconStop" />
                        ) : formik.touched.title ? (
                          <AiOutlineCheckCircle className="iconCheck" />
                        ) : (
                          <></>
                        )}
                      </span>
                    </div>
                    {formik.touched.title && formik.errors.title ? (
                      <Form.Text className="text-muted">
                        {formik.errors.title}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formRegisterEmail">
                <div className="inputWrapper">
                  <Form.Label>Cover image</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="cover"
                    placeholder="Url of the posts cover"
                    value={formik.values.cover}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{
                      borderColor:
                        formik.touched.cover && formik.errors.cover
                          ? "red"
                          : formik.touched.cover
                          ? "green"
                          : "#dee2e6",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  />
                  <span className="inputIcon">
                    {formik.touched.cover && formik.errors.cover ? (
                      <AiOutlineStop className="iconStop" />
                    ) : formik.touched.cover ? (
                      <AiOutlineCheckCircle className="iconCheck" />
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
                {formik.touched.cover && formik.errors.cover ? (
                  <Form.Text className="text-muted">
                    {formik.errors.cover}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRegisterEmail">
                <div className="inputWrapper">
                  <Form.Label>content </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="content"
                    placeholder="Post content..."
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{
                      borderColor:
                        formik.touched.content && formik.errors.content
                          ? "red"
                          : formik.touched.content
                          ? "green"
                          : "#dee2e6",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  />
                  <span className="inputIcon">
                    {formik.touched.content && formik.errors.content ? (
                      <AiOutlineStop className="iconStop" />
                    ) : formik.touched.content ? (
                      <AiOutlineCheckCircle className="iconCheck" />
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
                {formik.touched.content && formik.errors.content ? (
                  <Form.Text className="text-muted">
                    {formik.errors.content}
                  </Form.Text>
                ) : null}
              </Form.Group>
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
                UpLoad
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

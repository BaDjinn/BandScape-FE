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
  ModalBody,
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

export default function UpdateComment({
  show,
  handleClose,
  post,
  comment,
  getComments,
}) {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    //validazione Nome
    if (!values.content) {
      errors.content = "Required";
    }

    return errors;
  };
  //funzione di controllo del form

  const formik = useFormik({
    initialValues: {
      content: comment.content,
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");

      const data = {
        // author: auth.user._id,
        // postFather: post._id,
        content: values.content,
      };

      try {
        const req = await axios.patch(
          process.env.REACT_APP_URL_API + "/comment/" + comment._id,
          data
        );
        console.log(req);

        setLoading(false);
        getComments();
        handleClose();
      } catch (error) {
        setLoading(false);
        setErrorMessage("An error occured..");
      }
    },
  });
  const [formData, setFormData] = useState({ file: null });

  const handleChange = (event) => {
    if (event.target.files) {
      setFormData({ file: event.target.files[0] });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("cover", formData.file);
    try {
      const response = await axios.post(
        process.env.REACT_APP_URL_API + "/posts/cloudUpload",
        formDataToSend
      );
      console.log(response);
      if (response) {
        const dati = {
          cover: response.data.cover,
        };
        console.log({ dati });
        try {
          dispatch(upDatePost({ data: dati, id: post._id })).then((req) => {
            setLoading(false);
            dispatch(fetchPost({ page: 1 }));
            handleClose();
          });
        } catch (error) {
          setLoading(false);
          setErrorMessage("Errore nel caricamento del post");
        }
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ background: "#202020" }}>
        <Modal.Title>Update Post:</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit} className="registrationForm">
        <Modal.Body style={{ background: "#202020" }}>
          {" "}
          <Row className=" justify-content-center aling-items-center">
            <Col xs={12} md={8} className="py-5">
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
                style={{ backgroundColor: "#81d412" }}
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

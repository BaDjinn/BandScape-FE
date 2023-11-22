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
import { createPost, fetchPost } from "../../../redux/slices/PostsSlice";

export default function ModalUpdateProfile({ show, handleClose }) {
  const { auth, setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    //validazione Nome
    if (!values.nick) {
      errors.nick = "Required";
    }
    //Validazione Email
    if (!values.usrImg) {
      errors.usrImg = "Required";
    }
    //validazione password
    if (!values.usrBio) {
      errors.usrBio = "Required";
    }

    return errors;
  };
  //funzione di controllo del form
  const formik = useFormik({
    initialValues: {
      nick: auth?.user?.nick,
      usrImg: auth?.user?.usrImg,
      usrBio: auth?.user?.usrBio,
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");
      const { user } = auth;
      const dati = {
        ...user,
        nick: values.nick,
        usrImg: values.usrImg,
        usrBio: values.usrBio,
      };

      try {
        const req = await axios.patch(
          process.env.REACT_APP_URL_API + "/users/update/" + auth.user._id,
          dati
        );

        if (req.data.message === "I dati sono stati aggiornati") {
          setAuth({ token: auth.token, user: req.data.user });
        }
        handleClose();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorMessage("Errore in profile update");
      }
    },
  });
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ background: "#202020" }}>
        <Modal.Title>Update your profile!</Modal.Title>
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
                    <Form.Label>Nick</Form.Label>
                    <div className="inputWrapper">
                      <Form.Control
                        required
                        type="text"
                        name="nick"
                        placeholder="Nick.."
                        value={formik.values.nick}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          borderColor:
                            formik.touched.nick && formik.errors.nick
                              ? "red"
                              : formik.touched.nick
                              ? "green"
                              : "#dee2e6",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />{" "}
                      <span className="inputIcon">
                        {formik.touched.nick && formik.errors.nick ? (
                          <AiOutlineStop className="iconStop" />
                        ) : formik.touched.nick ? (
                          <AiOutlineCheckCircle className="iconCheck" />
                        ) : (
                          <></>
                        )}
                      </span>
                    </div>
                    {formik.touched.nick && formik.errors.nick ? (
                      <Form.Text className="text-muted">
                        {formik.errors.nick}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formRegisterEmail">
                <div className="inputWrapper">
                  <Form.Label>Profile image</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="usrImg"
                    placeholder="Url of the posts usrImg"
                    value={formik.values.usrImg}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{
                      borderColor:
                        formik.touched.usrImg && formik.errors.usrImg
                          ? "red"
                          : formik.touched.usrImg
                          ? "green"
                          : "#dee2e6",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  />
                  <span className="inputIcon">
                    {formik.touched.usrImg && formik.errors.usrImg ? (
                      <AiOutlineStop className="iconStop" />
                    ) : formik.touched.usrImg ? (
                      <AiOutlineCheckCircle className="iconCheck" />
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
                {formik.touched.usrImg && formik.errors.usrImg ? (
                  <Form.Text className="text-muted">
                    {formik.errors.usrImg}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRegisterEmail">
                <div className="inputWrapper">
                  <Form.Label>Your bio </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="usrBio"
                    placeholder="Your bio.."
                    value={formik.values.usrBio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{
                      borderColor:
                        formik.touched.usrBio && formik.errors.usrBio
                          ? "red"
                          : formik.touched.usrBio
                          ? "green"
                          : "#dee2e6",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  />
                  <span className="inputIcon">
                    {formik.touched.usrBio && formik.errors.usrBio ? (
                      <AiOutlineStop className="iconStop" />
                    ) : formik.touched.usrBio ? (
                      <AiOutlineCheckCircle className="iconCheck" />
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
                {formik.touched.usrBio && formik.errors.usrBio ? (
                  <Form.Text className="text-muted">
                    {formik.errors.usrBio}
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

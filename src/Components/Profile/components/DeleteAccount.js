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

export default function DeleteAccount({ show, handleClose }) {
  const { auth, setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      const { user } = auth;
      const dati = {
        ...user,
        nick: values.nick,
        usrImg: values.usrImg,
        usrBio: values.usrBio,
      };

      try {
        const req = await axios.delete(
          process.env.REACT_APP_URL_API + "/users/delete/" + auth.user._id,
          dati
        );

        if (req.data.message === "I dati sono stati aggiornati") {
          setAuth({});
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
        <Modal.Title>
          <p>Are you sure? </p>
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
                label={`Yes, I want to delete my account`}
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
                style={{ backgroundColor: "#81d412" }}
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

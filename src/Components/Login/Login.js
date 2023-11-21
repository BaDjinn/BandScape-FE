import axios from "axios";
import "./login.css";
import { useFormik } from "formik";
import React, { useState } from "react";
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
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineCheckCircle,
  AiOutlineStop,
} from "react-icons/ai";

import { CiMail, CiLock } from "react-icons/ci";
import useAuth from "../../Auth/hooks/useAuth";
export default function Login() {
  const { setAuth } = useAuth();
  const [showPsw, setShowPsw] = useState(false);
  const validate = (values) => {
    const errors = {};

    //Validazione Email
    if (!values.email) {
      errors.email = "the email is required";
    } else if (
      !/^[A-Za-z0-9.\-+_]+@[A-Za-z0-9]+\.[A-Za-z]+$/i.test(values.email)
    ) {
      errors.email = "Not a valid email";
    }
    //validazione password
    if (!values.psw) {
      errors.psw = "the password is required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      psw: "",
    },
    validate,
    onSubmit: async (values) => {
      const dati = {
        email: values.email,
        password: values.psw,
      };
      try {
        const response = await axios.post(
          process.env.REACT_APP_URL_API + "/login",
          dati
        );
        console.log(response);
        setAuth({ user: response.data.user, token: response.data.token });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={8} className="py-5">
            <Form
              onSubmit={formik.handleSubmit}
              className="registrationForm py-5"
            >
              <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Label>Your email</Form.Label>
                <div className="inputWrapper">
                  <CiMail className="position-absolute top-50 start-0 translate-middle-y ms-3" />
                  <Form.Control
                    className="ps-5"
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{
                      borderColor:
                        formik.touched.email && formik.errors.email
                          ? "red"
                          : formik.touched.email
                          ? "green"
                          : "#dee2e6",
                    }}
                  />
                  <span className="inputIcon">
                    {formik.touched.email && formik.errors.email ? (
                      <AiOutlineStop className="iconStop" />
                    ) : formik.touched.email ? (
                      <AiOutlineCheckCircle className="iconCheck" />
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <Form.Text className="text-muted">
                    {formik.errors.email}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Label>Password</Form.Label>
                <div className="inputWrapper">
                  <CiLock className="position-absolute top-50 start-0 translate-middle-y ms-3" />
                  <Form.Control
                    className="ps-5"
                    required
                    type={showPsw ? "text" : "password"}
                    name="psw"
                    placeholder="Password"
                    value={formik.values.psw}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{
                      borderColor:
                        formik.touched.psw && formik.errors.psw
                          ? "red"
                          : formik.touched.psw
                          ? "green"
                          : "#dee2e6",
                    }}
                  />
                  <span
                    className="inputIcon"
                    onClick={() => {
                      setShowPsw(!showPsw);
                    }}
                  >
                    {!showPsw ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    {formik.touched.psw && formik.errors.psw ? (
                      <AiOutlineStop className="iconStop" />
                    ) : formik.touched.psw ? (
                      <AiOutlineCheckCircle className="iconCheck" />
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
                {formik.touched.psw && formik.errors.psw ? (
                  <Form.Text className="text-muted">
                    {formik.errors.psw}
                  </Form.Text>
                ) : null}
              </Form.Group>

              <Button
                type="submit"
                className="submitBtn btn-primary"
                style={{ fontSize: "18px", padding: "13px 28px" }}
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

import axios from "axios";
import "../Login/login.css";
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
import { BiHomeAlt2 } from "react-icons/bi";
export default function Register() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //stati per nascondere/visualizzare la psw
  const [showPsw, setShowPsw] = useState(false);
  const [showComPsw, setShowComPsw] = useState(false);
  const validate = (values) => {
    const errors = {};
    //validazione Nome
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (!/^[A-Za-z\s']{1,255}$/i.test(values.firstName)) {
      errors.firstName = "not valid name";
    }

    //Validazione Email
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Za-z0-9.\-+_]+@[A-Za-z0-9]+\.[A-Za-z]+$/i.test(values.email)
    ) {
      errors.email = "Not a valid email";
    }
    //validazione password
    if (!values.psw) {
      errors.psw = "Required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/i.test(
        values.psw
      )
    ) {
      errors.psw =
        "Not a valid password, 8 to 24 caracter and contain at lead one capital letter, one number and one special simbol: ! @ # $ %";
    }
    //validazione conferma password
    if (!values.confirmPsw) {
      errors.confirmPsw = "Required";
    } else if (values.confirmPsw !== values.psw) {
      errors.confirmPsw = "Incorrect confirm password";
    }

    return errors;
  };
  //funzione di controllo del form
  const formik = useFormik({
    initialValues: {
      firstName: "",

      email: "",
      psw: "",
      confirmPsw: "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");
      // // console.log("value", values);
      // dati per la reggistrazione
      const dati = {
        name: values.firstName,

        password: values.psw,
        c_password: values.confirmPsw,
        email: values.email,
      };

      try {
        // prima fetch per la reggistrazione
        const response = await axios.post("url server" + "/api/register", dati);
      } catch (error) {
        setErrorMessage(error.response.data.error + "");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <>
      <Container>
        <Row className="py-5 justify-content-center aling-items-center">
          <Col xs={12} md={8} className="py-5">
            <Form onSubmit={formik.handleSubmit} className="registrationForm">
              <Row>
                <Col xs={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="formRegisterFirstName"
                  >
                    <Form.Label>Nick name</Form.Label>
                    <div className="inputWrapper">
                      <Form.Control
                        required
                        type="text"
                        name="firstName"
                        placeholder="Nick name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          borderColor:
                            formik.touched.firstName && formik.errors.firstName
                              ? "red"
                              : formik.touched.firstName
                              ? "green"
                              : "#dee2e6",
                        }}
                      />{" "}
                      <span className="inputIcon">
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <AiOutlineStop className="iconStop" />
                        ) : formik.touched.firstName ? (
                          <AiOutlineCheckCircle className="iconCheck" />
                        ) : (
                          <></>
                        )}
                      </span>
                    </div>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <Form.Text className="text-muted">
                        {formik.errors.firstName}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formRegisterEmail">
                <div className="inputWrapper">
                  <Form.Label>Your email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="Your email"
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
              <Form.Group className="mb-3" controlId="formRegisterPassword">
                <Form.Label>Password</Form.Label>
                <div className="inputWrapper">
                  <Form.Control
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
              <Form.Group
                className="mb-3"
                controlId="formRegisterConfirmPassword"
              >
                <Form.Label>Confirm password</Form.Label>
                <div className="inputWrapper">
                  <Form.Control
                    required
                    type={showComPsw ? "text" : "password"}
                    name="confirmPsw"
                    placeholder="Confirm your password"
                    value={formik.values.confirmPsw}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{
                      borderColor:
                        formik.touched.confirmPsw && formik.errors.confirmPsw
                          ? "red"
                          : formik.touched.confirmPsw
                          ? "green"
                          : "#dee2e6",
                    }}
                  />
                  <span
                    className="inputIcon"
                    onClick={() => {
                      setShowComPsw(!showComPsw);
                    }}
                  >
                    {!showComPsw ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    {formik.touched.confirmPsw && formik.errors.confirmPsw ? (
                      <AiOutlineStop className="iconStop" />
                    ) : formik.touched.confirmPsw ? (
                      <AiOutlineCheckCircle className="iconCheck" />
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
                {formik.touched.confirmPsw && formik.errors.confirmPsw ? (
                  <Form.Text className="text-muted">
                    {formik.errors.confirmPsw}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" required>
                  <Form.Check.Input
                    type="checkbox"
                    required
                    className="checkBox"
                  />
                  <Form.Check.Label>
                    I accept terms and privacy
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <Button
                type="submit"
                className={`submitBtn btn`}
                disabled={loading}
              >
                Sing up
              </Button>
              {/* {errorMessage !== "" ? (
                <Alert variant="danger" className="mt-2">
                  {errorMessage}
                </Alert>
              ) : (
                <></>
              )} */}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

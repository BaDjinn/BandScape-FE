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
import { AiOutlineCheckCircle, AiOutlineStop } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
export default function BackOffice() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      // firstName: "",

      // email: "",
      // psw: "",
      // confirmPsw: "",
      title: "",
      cover: "",
      author: "",
      content: "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");
      // // console.log("value", values);
      // dati per la reggistrazione
      // const dati = {
      //   name: values.firstName,

      //   password: values.psw,
      //   c_password: values.confirmPsw,
      //   email: values.email,
      // };

      try {
        // prima fetch per la reggistrazione
        // const response = await axios.post("url server" + "/api/register", dati);
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
                    <Form.Label>Title</Form.Label>
                    <div className="inputWrapper">
                      <Form.Control
                        required
                        type="text"
                        name="title"
                        placeholder="Nick name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          borderColor:
                            formik.touched.title && formik.errors.title
                              ? "red"
                              : formik.touched.title
                              ? "green"
                              : "#dee2e6",
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
                    placeholder="Url of the image"
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
                    placeholder="Url of the image"
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

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" required>
                  <Form.Check.Input
                    type="checkbox"
                    required
                    className="checkBox"
                  />
                  <Form.Check.Label>Confirm the upload</Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <Button
                type="submit"
                className={`submitBtn btn`}
                disabled={loading}
              >
                UpLoad
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

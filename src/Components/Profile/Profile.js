import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useAuth from "../../Auth/hooks/useAuth";
import ModalUpdateProfile from "./components/ModalUpdateProfile";
export default function Profile() {
  const { auth } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row className=" justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <Card className="text-center profile-card">
            <div>
              {" "}
              <Card.Img
                variant="top"
                src={auth?.user?.usrImg}
                style={{ animation: "none" }}
              />
            </div>
            <Card.Body>
              <p>{auth?.user?.nick}</p>
              <p>{auth?.user?.email}</p>
              <p>{auth?.user?.usrBio}</p>
              <p className="d-flex justify-content-between">
                <Button onClick={handleShow}>Change</Button>
                <Button variant="danger">Delete Account</Button>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ModalUpdateProfile show={show} handleClose={handleClose} />
    </>
  );
}

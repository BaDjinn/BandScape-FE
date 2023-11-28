import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useAuth from "../../Auth/hooks/useAuth";
import ModalUpdateProfile from "./components/ModalUpdateProfile";
import { FaPencilAlt } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";
import DeleteAccount from "./components/DeleteAccount";

export default function Profile() {
  const { auth } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showDel, setShowDel] = useState(false);

  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);
  return (
    <>
      <Row
        className=" justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
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
                <button
                  onClick={handleShow}
                  style={{ background: "transparent", border: "none" }}
                >
                  {" "}
                  <FaPencilAlt style={{ color: "#81d412", fontSize: 20 }} />
                </button>
                <button
                  style={{ background: "transparent", border: "none" }}
                  onClick={handleShowDel}
                >
                  <MdDeleteForever style={{ color: "red", fontSize: 25 }} />
                </button>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ModalUpdateProfile show={show} handleClose={handleClose} />
      <DeleteAccount show={showDel} handleClose={handleCloseDel} />
    </>
  );
}

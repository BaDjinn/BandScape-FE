import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export default function Profile() {
  return (
    <>
      <Row className=" justify-content-center align-items-center">
        <Col xs={6}>
          <Card className="text-center ">
            <Card.Img variant="top" src="http://placekitten.com/600/500" />
            <Card.Body>
              <p>Nikname</p>
              <p>email</p>
              <p>Bio</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

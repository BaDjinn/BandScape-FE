import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <p>&copy; Sonic Fury </p>
          <p>Giulio Sottovia</p>
        </Col>
      </Row>
    </Container>
  );
}

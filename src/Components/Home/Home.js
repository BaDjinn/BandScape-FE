import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container>
        <Row style={{ height: "80vh", background: "red" }}>Hero section</Row>
        <Row style={{ height: "80vh" }} className="my-2">
          <Col style={{ background: "blue" }}>Nex Tour</Col>{" "}
          <Col>
            <Row style={{ background: "red", height: "50%" }}>
              {" "}
              Post 1 titolo immagine descrizione | link to /posts
            </Row>
            <Row style={{ background: "yellow", height: "50%" }}>
              {" "}
              Post 2 titolo immagine descrizione | link to /posts
            </Row>
          </Col>
        </Row>
        <Row style={{ height: "80vh", background: "red" }}>Chi siamo</Row>
        <Row style={{ height: "80vh", background: "yellow" }}>
          carosello immagini
        </Row>
        <Row style={{ height: "80vh", background: "lightblue" }}>
          video gallery
        </Row>
      </Container>
    </main>
  );
}

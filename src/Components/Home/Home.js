import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
export default function Home() {
  return (
    <main>
      <Container fluid>
        <Row
          style={{
            height: "80vh",
          }}
          className="pb-5"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className=" image-container position-relative"
          >
            <h1
              className="position-absolute"
              style={{
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "8rem",
                color: "white",
                fontWeight: "900",
                color: "#a8e00f",
              }}
            >
              Sonic Fury
            </h1>{" "}
            {/* <img
              src="/images/light-concert.jpg"
              alt="light concert"
              className="w-100"
            />{" "} */}
          </div>
        </Row>
        <Row className="my-2">
          <Col
            className="next-tour d-flex flex-column justify-content-end "
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <div className="overlay"></div>
            <h2 style={{ zIndex: 10 }}>Our next Tour! </h2>
            <p style={{ zIndex: 10 }} className="text-end">
              12-12-2024 | 12-12-2015
            </p>
            <div style={{ zIndex: 10 }} className="h-100 ">
              <p className="py-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p className="text-end">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p className="py-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </Col>{" "}
          <Col>
            <Row
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <li class="posts_item">
                <div class="post">
                  <div class="post_price">22-01-2024</div>
                  <div class="post_image">
                    <img
                      src="/images/gitarra-1.jpg"
                      alt="mixed vegetable salad in a mason jar. "
                    />
                  </div>
                  <div class="post_content">
                    <h2 class="post_title">Titolo post</h2>
                    <div class="post_text">
                      <p>
                        Dig into the freshest veggies of the season! This
                        salad-in-a-jar features a mixture of leafy greens and
                        seasonal vegetables, fresh from the farmer's market.
                      </p>
                      <p>
                        Served with your choice of dressing on the side:
                        housemade ranch, cherry balsamic vinaigrette, creamy
                        chipotle, avocado green goddess, or honey mustard. Add
                        your choice of protein for $2 more.
                      </p>
                    </div>
                    <div></div>{" "}
                  </div>
                </div>
              </li>
            </Row>
            <Row
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <li class="posts_item">
                <div class="post">
                  <div class="post_price">22-01-2024</div>
                  <div class="post_image">
                    <img
                      src="/images/gitarra.webp"
                      alt="mixed vegetable salad in a mason jar. "
                    />
                  </div>
                  <div class="post_content">
                    <h2 class="post_title">Titolo post</h2>
                    <div class="post_text">
                      <p>
                        Dig into the freshest veggies of the season! This
                        salad-in-a-jar features a mixture of leafy greens and
                        seasonal vegetables, fresh from the farmer's market.
                      </p>
                      <p>
                        Served with your choice of dressing on the side:
                        housemade ranch, cherry balsamic vinaigrette, creamy
                        chipotle, avocado green goddess, or honey mustard. Add
                        your choice of protein for $2 more.
                      </p>
                    </div>
                    <div></div>{" "}
                  </div>
                </div>
              </li>
            </Row>
          </Col>
        </Row>
        <Row>About us: </Row>
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

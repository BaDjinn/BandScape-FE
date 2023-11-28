import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { fetchPost } from "../../redux/slices/PostsSlice";
import { GiPositionMarker } from "react-icons/gi";
import { FaLinesLeaning } from "react-icons/fa6";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(fetchPost({ page: 1 }));
  }, []);
  return (
    <main>
      <Container fluid>
        <Row
          style={{
            height: "100vh",
          }}
        >
          {/* <div
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
            </h1>{" "} */}
          {/* <img
              src="/images/light-concert.jpg"
              alt="light concert"
                className="w-100"
            />{" "} */}
          {/* </div> */}
          <div
            className="container  hg-100 bg-trasparent"
            style={{
              backgroundImage: "url('/images/hero.jpg')",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="p-5 text-center bg-trasparent p-0 d-flex flex-column justify-content-center align-items-center h-100">
              <p className="col-lg-8 mx-auto fs-5 text-white fw-bold">
                ROCK BAND FROM ARKHAM
              </p>
              <h1 className="text-white  display-1">
                <span className="fw-bold">
                  WE ARE <span style={{ color: "#81d412" }}>SONIC</span>
                </span>
                FURY
              </h1>
              <p className="col-lg-8 mx-auto fs-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </Row>
        <Row className=" py-5">
          <h2 className="fw-bold display-4 text-center pb-4 mb-4">
            <FaLinesLeaning style={{ color: "#81d412" }} /> GIGS & TOURS 2024
          </h2>
          <Col
            xs={12}
            md={8}

            // data-aos="fade-right"
            // data-aos-offset="200"
            // data-aos-duration="1000"
            // data-aos-once="false"
          >
            {/* <div className="overlay"></div>
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
            </div> */}
            <div className="container px-5">
              <div
                className="card mb-3 w-100 h-100 rounded-0"
                style={{ backgroundColor: "#0F0F0F" }}
              >
                <div className="row g-0 h-100">
                  <div className="col-md-4 position-relative">
                    <img
                      src="/images/concert1.jpg"
                      className="w-100 h-100 border border-light"
                      alt="..."
                    />
                    <span className="position-absolute top-50 start-50 translate-middle text-white fs-6 text-center">
                      <span className="fw-bold h1">
                        26
                        <br />
                        AUG
                        <br />
                        2024
                      </span>
                    </span>
                  </div>
                  <div className="col-md-8 ps-4">
                    <div className="card-body">
                      <h5 className="card-title text-white fw-bold pt-2">
                        Sound of music
                      </h5>
                      <hr className="opacity-50 text-light" />
                      <p className="card-text text-white py-3">
                        <GiPositionMarker /> 199 Park Ave, San Jose, United
                        States
                      </p>
                      <div>
                        <button
                          type="button"
                          className="btn btn-success fw-bold border-0 text-dark rounded-0"
                          style={{ backgroundColor: "#81d412" }}
                        >
                          AVIABLE SOON
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="card mb-3 w-100 h-100 rounded-0 mt-5"
                style={{ backgroundColor: "#0F0F0F" }}
              >
                <div className="row g-0 h-100">
                  <div className="col-md-4 position-relative">
                    <img
                      src="/images/concert2.jpg"
                      className="w-100 h-100 border border-light"
                      alt="..."
                    />
                    <span className="position-absolute top-50 start-50 translate-middle text-white fs-6 text-center">
                      <span className="fw-bold h1">
                        05
                        <br />
                        NOV
                        <br />
                        2024
                      </span>
                    </span>
                  </div>

                  <div className="col-md-8 ps-4">
                    <div className="card-body">
                      <h5 className="card-title text-white fw-bold pt-2">
                        Legends Tour
                      </h5>
                      <hr className="opacity-50 text-light" />
                      <p className="card-text text-white py-3">
                        <GiPositionMarker /> 78 Friedrichstraße, Berlin, Germany
                      </p>
                      <div>
                        <button
                          type="button"
                          className="btn btn-success fw-bold border-0 text-dark rounded-0"
                          style={{ backgroundColor: "#81d412" }}
                        >
                          AVIABLE SOON
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} md={4} className="pe-5 text-center">
            {/* {posts.length > 0 ? (
              posts.map(
                (post, i) =>
                  i < 2 && (
                    <Row
                      key={post._id + "homepage"}
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-duration="1000"
                      data-aos-once="false"
                    >
                      <li className="posts_item">
                        <div className="post">
                          <div className="post_price">
                            {" "}
                            {format(new Date(post?.createdAt), "d-MMM-y HH:mm")}
                          </div>
                          <div className="post_image">
                            <img
                              src="/images/gitarra-1.jpg"
                              alt="mixed vegetable salad in a mason jar. "
                            />
                          </div>
                          <div className="post_content">
                            <h2 className="post_title">{post?.title}</h2>
                            <div className="post_text">
                              <p>{post?.content}</p>
                              <p>Author: {post?.author?.nick}</p>
                            </div>
                            <div></div>{" "}
                          </div>
                        </div>
                      </li>
                    </Row>
                  )
              )
            ) : (
              <p></p>
            )} */}
            <img src="/images/wow.png" className="w-75" alt="..." />
          </Col>
        </Row>

        <Row>
          <main>
            <div className="album py-5">
              <div className="container">
                <h2 className="text-center">Photo Galery</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <Col
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-delay="450"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        <img
                          alt="img"
                          src="/images/light-concert.jpg"
                          style={{ animationDelay: "2s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>
                  <Col
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-delay="250"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        <img
                          alt="img"
                          src="/images/man-2-guitar.jpg"
                          style={{ animationDelay: "4s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>
                  <Col
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        {" "}
                        <img
                          alt="img"
                          src="/images/vinyl.jpg"
                          style={{ animationDelay: "6s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>

                  <Col
                    data-aos="fade-left"
                    data-aos-offset="400"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        <img
                          alt="img"
                          src="/images/piano.jpg"
                          style={{ animationDelay: "6s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>
                  <Col
                    data-aos="fade-left"
                    data-aos-offset="400"
                    data-aos-delay="250"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        <img
                          alt="img"
                          src="/images/man-guitar.jpg"
                          style={{ animationDelay: "4s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>
                  <Col
                    data-aos="fade-left"
                    data-aos-offset="400"
                    data-aos-delay="450"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        <img
                          alt="img"
                          src="/images/violins.jpg"
                          style={{ animationDelay: "2s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>

                  <Col
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-delay="450"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        <img
                          alt="img"
                          src="/images/microphone.jpg"
                          style={{ animationDelay: "2s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>
                  <Col
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-delay="250"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        <img
                          alt="img"
                          src="/images/music.jpg"
                          style={{ animationDelay: "4s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>
                  <Col
                    data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <div className="card shadow-sm">
                      <div className="cardContaier">
                        <img
                          alt="img"
                          src="/images/gitarra-1.jpg"
                          style={{ animationDelay: "6s" }}
                        />
                      </div>
                      {/* <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div> */}
                    </div>
                  </Col>
                </div>
              </div>
            </div>
          </main>
        </Row>
      </Container>
    </main>
  );
}

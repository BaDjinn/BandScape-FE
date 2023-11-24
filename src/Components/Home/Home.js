import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { fetchPost } from "../../redux/slices/PostsSlice";
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
            {posts.length > 0 ? (
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
            )}
          </Col>
        </Row>

        <Row>
          <main>
            <div className="album py-5">
              <div className="container">
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
                        <img alt="img" src="/images/light-concert.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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
                        <img alt="img" src="/images/man-2-guitar.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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
                        <img alt="img" src="/images/vinyl.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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
                        <img alt="img" src="/images/piano.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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
                        <img alt="img" src="/images/man-guitar.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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
                        <img alt="img" src="/images/violins.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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
                        <img alt="img" src="/images/microphone.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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
                        <img alt="img" src="/images/music.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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
                        <img alt="img" src="/images/gitarra-1.jpg" />
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
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

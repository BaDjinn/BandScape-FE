import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PostComments from "./PostComments";
import useAuth from "../../../Auth/hooks/useAuth";
import DeletePostModal from "./DeletePostModal";
import axios from "axios";
import UpdatePostModal from "./UpdatePostModal";
import { format } from "date-fns";
import { GiPositionMarker } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidCommentAdd } from "react-icons/bi";
import { BiSolidComment } from "react-icons/bi";

export default function Post({ post }) {
  const { auth } = useAuth();
  const [showCommenti, setShowCommenti] = useState(false);
  const [addComment, setAddComment] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showUP, setShowUP] = useState(false);
  const handleCloseUP = () => setShowUP(false);
  const handleShowUP = () => setShowUP(true);
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const req = await axios.get(
        process.env.REACT_APP_URL_API + "/comment/" + post._id
      );
      console.log(req);
      setComments(req.data.comment);
    } catch (error) {
      console.log(error);
    }
  };
  const postComment = async () => {
    try {
      const data = {
        author: auth.user._id,
        postFather: post._id,
        content: addComment,
      };
      const req = await axios.post(
        process.env.REACT_APP_URL_API + "/comment",
        data
      );
      console.log(req);
      if (req.data.message === "Comment saved successfully") {
        getComments();
      }
      // setComments(req.data.comment);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <Col xs={12} className="my-3">
      <Row>
        <div
          className="card w-100 h-100 rounded-0"
          style={{ backgroundColor: "#0F0F0F" }}
        >
          <div className="row g-0 h-100">
            <div className="col-md-4 position-relative">
              {/* <img
                src="/images/concert1.jpg"
                className="w-100 h-100 border border-light"
                alt="..."
              /> */}
              <img
                src={post?.cover}
                alt="post image"
                className="w-100 h-100 border border-light"
              />
              <span className="position-absolute bottom-0 start-50 translate-middle text-white fs-6 text-center">
                <span className="fw-bold ">
                  {format(new Date(post?.createdAt), "d-MMM-y HH:mm")}
                </span>
              </span>
            </div>
            <div className="col-md-8 ps-4">
              <div className="card-body d-flex flex-column justify-content-center h-100">
                <h5 className="card-title text-white fw-bold pt-2">
                  {post?.title}
                </h5>
                <hr className="opacity-50 text-light" />
                <p className="card-text text-white py-3">
                  <p>{post?.content}</p>
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    onClick={() => setShowCommenti(!showCommenti)}
                    className="btn btn-success fw-bold border-0 text-dark rounded-0"
                    style={{ backgroundColor: "#81d412" }}
                  >
                    Comments <BiSolidComment />
                  </button>
                  {auth.user?.isAdmin && (
                    <div>
                      <button
                        variant="danger"
                        onClick={handleShow}
                        className="btn btn-success fw-bold border-0 text-dark rounded-0"
                        style={{ background: "transparent" }}
                      >
                        <MdDeleteForever
                          style={{ color: "red", fontSize: 25 }}
                        />
                      </button>
                      <button
                        variant="secondary"
                        onClick={handleShowUP}
                        className="btn btn-success fw-bold border-0 text-dark rounded-0"
                        style={{ background: "transparent" }}
                      >
                        <FaPencilAlt
                          style={{ color: "#81d412", fontSize: 20 }}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row style={{ background: "#0f0f0f" }} className="justify-content-center">
        <Col xs={12} md={8} className="p-3">
          {showCommenti && (
            <>
              {comments && comments.length > 0 ? (
                comments.map((comment, i) => (
                  <PostComments
                    key={comment._id + "commenti"}
                    comment={comment}
                    post={post}
                    getComments={getComments}
                  />
                ))
              ) : (
                <>
                  <p className="text-white">
                    There are no comment for this post yet!
                  </p>
                </>
              )}
            </>
          )}
        </Col>
        {showCommenti && auth.user?.nick && (
          <Col xs={12} md={8}>
            <Row className="d-flex justify-content-between">
              <Col xs={12} md={8} className="p-3">
                <Form>
                  <Form.Group className="mb-3" controlId="commentadd">
                    <Form.Control
                      type="text"
                      placeholder="Your comment..."
                      value={addComment}
                      onChange={(e) => setAddComment(e.target.value)}
                      style={{ color: "black", fontWeight: "bolder" }}
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={12} md={4} className="p-3">
                <Button
                  onClick={postComment}
                  className="btn btn-success fw-bold border-0 text-dark rounded-0 w-100"
                  style={{ backgroundColor: "#81d412" }}
                >
                  Add Comment <BiSolidCommentAdd />
                </Button>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
      <DeletePostModal show={show} handleClose={handleClose} post={post} />
      <UpdatePostModal show={showUP} handleClose={handleCloseUP} post={post} />
    </Col>
  );
}

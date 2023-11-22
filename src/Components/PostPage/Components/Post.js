import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PostComments from "./PostComments";
import useAuth from "../../../Auth/hooks/useAuth";
import DeletePostModal from "./DeletePostModal";
import axios from "axios";
import UpdatePostModal from "./UpdatePostModal";
import { format } from "date-fns";

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

  const [formData, setFormData] = useState({ file: null });

  const handleChange = (event) => {
    if (event.target.files) {
      setFormData({ file: event.target.files[0] });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("cover", formData.file);

    // try {
    //   const response = await axios.post("/api/upload", formDataToSend);
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      const response = await fetch(
        process.env.REACT_APP_URL_API + "/posts/cloudUpload",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (response.ok) {
        const res = await response.text();
        console.log(res);
        console.log("immagine caricata");
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li class="posts_item">
      <div class="post">
        <div class="post_price">
          {format(new Date(post?.createdAt), "d-MMM-y HH:mm")}
        </div>
        <div class="post_image">
          <img src={post?.cover} alt="mixed vegetable salad in a mason jar. " />
        </div>
        <div class="post_content">
          <h2 class="post_title">{post?.title}</h2>
          <div class="post_text">
            <p>{post?.content}</p>
            <p>Author: {post?.author?.nick}</p>
            <p className="d-flex justify-content-between">
              <Button onClick={() => setShowCommenti(!showCommenti)}>
                Comments
              </Button>
              {auth.user?.isAdmin && (
                <div>
                  <Button
                    variant="danger"
                    onClick={handleShow}
                    className="mx-2"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleShowUP}
                    className="mx-2"
                  >
                    Update
                  </Button>
                </div>
              )}
            </p>
          </div>
          <div
            style={{
              maxHeight: "50vh",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {showCommenti && (
              <>
                {comments && comments.length > 0 ? (
                  comments.map((comment, i) => (
                    <PostComments
                      key={i + post._id + "commenti"}
                      comment={comment}
                    />
                  ))
                ) : (
                  <>
                    <p>There are no comment for this post yet!</p>
                  </>
                )}
              </>
            )}
            {showCommenti && (
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
                  <Button className="w-100" onClick={postComment}>
                    Add Comment
                  </Button>
                </Col>
              </Row>
            )}
          </div>
          <h2>Ciao mondo</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
      <DeletePostModal show={show} handleClose={handleClose} post={post} />
      <UpdatePostModal show={showUP} handleClose={handleCloseUP} post={post} />
    </li>
  );
}

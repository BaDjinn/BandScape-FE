import axios from "axios";
import { format } from "date-fns";
import React, { useState } from "react";
import UpdateComment from "./UpdateComment";
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import DeleteComment from "./DeleteComment";
import useAuth from "../../../Auth/hooks/useAuth";

export default function PostComments({ comment, post, getComments }) {
  const { auth } = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showDel, setShowDel] = useState(false);
  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  return (
    <>
      <div className="text-white">
        <h3 className="d-flex justify-content-between align-items-center">
          <span>{comment?.author?.nick}</span>{" "}
          <small style={{ fontSize: 16 }}>
            {format(new Date(comment?.createdAt), "d-MMM-y HH:mm")}
          </small>
        </h3>
        <p>
          <span>{comment?.content}</span>
          {auth.user._id === comment.author._id || auth.user.isAdmin ? (
            <span>
              <button
                onClick={handleShow}
                style={{ background: "transparent", border: "none" }}
              >
                {" "}
                <FaPencilAlt style={{ color: "#81d412", fontSize: 20 }} />
              </button>
              <button
                onClick={handleShowDel}
                style={{ background: "transparent", border: "none" }}
              >
                <MdDeleteForever style={{ color: "red", fontSize: 25 }} />
              </button>
            </span>
          ) : (
            <></>
          )}
        </p>
      </div>
      <UpdateComment
        show={show}
        handleClose={handleClose}
        post={post}
        comment={comment}
        getComments={getComments}
      />
      <DeleteComment
        show={showDel}
        handleClose={handleCloseDel}
        post={post}
        comment={comment}
        getComments={getComments}
      />
    </>
  );
}

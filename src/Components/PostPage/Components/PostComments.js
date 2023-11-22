import { format } from "date-fns";
import React from "react";

export default function PostComments({ comment }) {
  return (
    <>
      <div className="text-white">
        <h3 className="d-flex justify-content-between align-items-center">
          <span>{comment?.author?.nick}</span>{" "}
          <small style={{ fontSize: 16 }}>
            {format(new Date(comment?.createdAt), "d-MMM-y HH:mm")}
          </small>
        </h3>
        <p>{comment?.content}</p>
      </div>
    </>
  );
}

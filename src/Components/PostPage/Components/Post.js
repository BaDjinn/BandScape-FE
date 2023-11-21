import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PostComments from "./PostComments";

export default function Post() {
  const [showCommenti, setShowCommenti] = useState(false);
  return (
    <li class="posts_item">
      <div class="post">
        <div class="post_price">22-01-2024</div>
        <div class="post_image">
          <img
            src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
            alt="mixed vegetable salad in a mason jar. "
          />
        </div>
        <div class="post_content">
          <h2 class="post_title">Titolo post</h2>
          <div class="post_text">
            <p>
              Dig into the freshest veggies of the season! This salad-in-a-jar
              features a mixture of leafy greens and seasonal vegetables, fresh
              from the farmer's market.
            </p>
            <p>
              Served with your choice of dressing on the side: housemade ranch,
              cherry balsamic vinaigrette, creamy chipotle, avocado green
              goddess, or honey mustard. Add your choice of protein for $2 more.
            </p>
            <p className="d-flex justify-content-between">
              <Button onClick={() => setShowCommenti(!showCommenti)}>
                Comments
              </Button>
              <Button variant="danger">Delete</Button>
            </p>
          </div>
          <div>
            {showCommenti && (
              <>
                <PostComments />
                <PostComments />
                <PostComments />
              </>
            )}
          </div>
          <p className="d-flex justify-content-between">
            <Button>Add Comment</Button>
          </p>
        </div>
      </div>
    </li>
  );
}

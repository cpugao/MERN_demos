import React, { useEffect, useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

// red belt will do routing to views instead of a component / nested component
const Post = (props) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/" + props.id)
      .then((res) => {
        // console.log(res.data);
        // setting state causes component to re-render to show new state data
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  if (post === null) {
    return "Loading...";
  }

  function handleDelete() {
    axios
      .delete("http://localhost:8000/api/posts/" + props.id)
      .then((res) => {
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button
        onClick={(event) => {
          handleDelete();
        }}
      >
        Delete
      </button>
      <p>
        Likes: {post.likeCount} | dislikes: {post.dislikeCount}
      </p>
      <img src={post.imgUrl} alt="post" width="70%" />
    </div>
  );
};

export default Post;

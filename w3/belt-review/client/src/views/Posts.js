// ADD CREATE FROM ON THIS PAGE AS WELL

import Axios from "axios";
import React, { useEffect, useState } from "react";

import axios from "axios";

import SinglePost from "../components/SinglePost";

const Posts = (props) => {
  const [posts, setPosts] = useState(null);

  // empty array to make this get request only happen when the component
  // first loads
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (posts === null) {
    return "Loading...";
  }

  return (
    <div>
      {posts.map((post) => {
        return <SinglePost key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Posts;

// ADD CREATE FROM ON THIS PAGE AS WELL

import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "@reach/router";

import SinglePost from "../components/SinglePost";
import NewPostForm from "../components/NewPostForm";

const Posts = (props) => {
  const [posts, setPosts] = useState(null);

  // empty array to make this get request only happen when the component
  // first loads
  useEffect(() => {
    getAllPosts();
  }, []);

  function getAllPosts() {
    axios
      .get("http://localhost:8000/api/posts")
      .then((res) => {
        // console.log(res.data);
        // setting state causes component to re-render to show new state data
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function handleLike(isLike, idx) {
    const selectedPost = posts[idx];

    if (isLike) {
      selectedPost.likeCount++;
    } else {
      selectedPost.dislikeCount++;
    }

    axios
      .put("http://localhost:8000/api/posts/" + selectedPost._id, selectedPost)
      .then((res) => {
        // console.log(res.data);
        // setting state causes component to re-render to show new state data
        const updatedPosts = [...posts];
        // replace just this one post with the new updated post
        updatedPosts[idx] = res.data;
        // cause a re-render to display the new updated post's info
        setPosts(updatedPosts);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  if (posts === null) {
    return "Loading...";
  }

  return (
    <div>
      {/*
        Technique 1 to cause the new post to be displayed,
        inefficient because we get all the posts again
        when we only need the 1 new post added 
      */}
      {/* <NewPostForm getAllPosts={getAllPosts} /> */}

      {/* 
        Technique 2 avoids the extra db call to getAll by
        the child NewPostForm updating it's parent's state
        using the setPosts method
       */}
      <NewPostForm posts={posts} setPosts={setPosts} />
      <hr />
      {posts.map((post, idx) => {
        return (
          <div key={post._id}>
            <h2>
              <Link to={"/posts/" + post._id}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
            <p>
              <span
                onClick={(event) => {
                  handleLike(true, idx);
                }}
                style={{ cursor: "pointer" }}
              >
                &#128077;
              </span>
              : {post.likeCount} |{" "}
              <span
                onClick={(event) => {
                  handleLike(false, idx);
                }}
                style={{ cursor: "pointer" }}
              >
                {" "}
                &#128078;
              </span>
              : {post.dislikeCount}
            </p>
            <img src={post.imgUrl} alt="post" width="30%" />
          </div>
        );

        // we could put all this HTML into it's own component to clean it up
        // but then it's harder to update the Posts component's state
        // from the SinglePost component because we would need
        // to pass in state through props just like above <NewPostForm />
        // return <SinglePost key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Posts;

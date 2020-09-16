import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const NewPost = (props) => {
  // useState("initial value of the state var")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newPost = {
      // long-form key value pair - must be used when var is named differently
      title: title,
      // shorthand key value pair when the var name is same as key name
      description,
      imgUrl,
      primaryCategory,
      secondaryCategory,
    };

    // console.log(newPost);

    axios
      .post("http://localhost:8000/api/posts", newPost)
      .then((res) => {
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div>
        <label>Title: </label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Description: </label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Image Url: </label>
        <input
          type="text"
          onChange={(event) => {
            setImgUrl(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Primary Category: </label>
        <input
          type="text"
          onChange={(event) => {
            setPrimaryCategory(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Secondary Category: </label>
        <input
          type="text"
          onChange={(event) => {
            setSecondaryCategory(event.target.value);
          }}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default NewPost;

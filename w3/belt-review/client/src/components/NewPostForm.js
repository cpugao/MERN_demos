import React, { useState } from "react";

import axios from "axios";
import Posts from "../views/Posts";

const NewPostForm = (props) => {
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
    };

    // because secondaryCategory is NOT required but HAS a minlength validation
    // if user submits empty input box, it will be an empty string that has length 0
    // triggering minlength error, so we will exclude it from the object altogether
    if (secondaryCategory !== "") {
      newPost.secondaryCategory = secondaryCategory;
    }

    console.log(newPost);

    axios
      .post("http://localhost:8000/api/posts", newPost)
      .then((res) => {
        console.log(res.data);
        // Technique 1 (see comment in Posts.js)
        // props.getAllPosts();
        // Technique 2
        props.setPosts([...props.posts, res.data]);

        setTitle("");
        setDescription("");
        setImgUrl("");
        setPrimaryCategory("");
        setSecondaryCategory("");
      })
      .catch((err) => {
        console.log(err.response);
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
          value={title}
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Description: </label>
        <input
          value={description}
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Image Url: </label>
        <input
          value={imgUrl}
          type="text"
          onChange={(event) => {
            setImgUrl(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Primary Category: </label>
        <input
          value={primaryCategory}
          type="text"
          onChange={(event) => {
            setPrimaryCategory(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Secondary Category: </label>
        <input
          value={secondaryCategory}
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

export default NewPostForm;

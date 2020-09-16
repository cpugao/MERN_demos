import React from "react";

const SinglePost = (props) => {
  return (
    <div key={props.post._id}>
      <h2>{props.post.title}</h2>
      <p>{props.post.description}</p>
      <p>
        Likes: {props.post.likeCount} | dislikes: {props.post.dislikeCount}
      </p>
      <img src={props.post.imgUrl} alt="post" width="30%" />
    </div>
  );
};

export default SinglePost;

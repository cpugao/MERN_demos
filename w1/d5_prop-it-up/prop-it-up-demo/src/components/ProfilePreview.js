import React, { useState } from "react";

const ProfilePreview = (props) => {
  // destructure the keys out of props object so we don't have to keep typing props.propName
  // skip destructuring if it confuses you and just use props.propName
  const { username, likeCount, bio, thumbnailUrl } = props;

  const [likes, setLikes] = useState(likeCount);

  const containerStyle = {
    borderRadius: 5,
    padding: 20,
    border: "1px solid gray",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    maxWidth: "600px",
    boxShadow: "10px 5px 5px darkgray",
  };

  const imgStyle = {
    borderRadius: "200px",
    boxShadow: "10px 5px 5px gray",
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const likeIconStyle = {
    fontSize: 25,
    cursor: "pointer",
  };

  const getHearts = () => {
    const heartsJSX = [];

    for (let i = 0; i < likes; i++) {
      heartsJSX.push(
        <span
          key={i}
          style={{ color: "red", fontSize: 20 }}
          role="img"
          aria-label="Heart"
        >
          &#x2764;
        </span>
      );
    }
    return heartsJSX;
  };

  return (
    <div style={containerStyle}>
      <h2>
        {username}
        {likes >= 10 && (
          <span role="img" aria-label="Fire">
            &#128293;
          </span>
        )}
      </h2>
      <h4 style={{ textDecoration: "underline" }}>Bio</h4>
      <p>{bio}</p>
      <p>
        <span
          style={likeIconStyle}
          role="img"
          aria-label="Thumbs Up"
          onClick={(event) => {
            handleLike();
          }}
        >
          &#128077;
        </span>
        : {likes}
      </p>
      <div>{getHearts()}</div>
      <img
        style={imgStyle}
        height="300px"
        width="300px"
        src={thumbnailUrl}
        alt="Profile"
      />
    </div>
  );
};

export default ProfilePreview;

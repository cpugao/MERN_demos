import React from "react";

const DisplayContent = (props) => {
  const contentStyle = {
    border: "1px solid gray",
    padding: 10,
    marginTop: 15,
  };
  return (
    <div style={contentStyle}>
      <h2>{props.content}</h2>
    </div>
  );
};

export default DisplayContent;

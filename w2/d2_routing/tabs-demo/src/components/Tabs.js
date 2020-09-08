import React from "react";

const Tabs = (props) => {
  return (
    <nav style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
      {props.tabs.map((tab, i) => {
        const labelStyles = {
          border: "1px solid gray",
          padding: "10px 70px",
          margin: "0 5px",
        };

        if (i === props.selectedIdx) {
          labelStyles.backgroundColor = tab.backgroundColor;
          labelStyles.color = tab.color;
          labelStyles.animation = "wobble 1s 1";
        }

        return (
          <h2
            key={i}
            style={labelStyles}
            onClick={(event) => {
              props.setSelectedIdx(i);
              props.tabs[i].callback();
            }}
          >
            {tab.label} | idx: {i}
          </h2>
        );
      })}
    </nav>
  );
};

export default Tabs;

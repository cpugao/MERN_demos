import React, { useState } from "react";
import "./App.css";

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: "Tab 1 Content",
      color: "red",
      backgroundColor: "black",
      // long-form method syntax
      callback: function () {
        console.log(`${this.label} clicked.`);
      },
    },
    {
      label: "Tab 2",
      content: "Tab 2 Content",
      color: "green",
      backgroundColor: "#8B4513",
      // shorthand method syntax
      callback() {
        console.log(`${this.label} clicked.`);
      },
    },
    {
      label: "Tab 3",
      content: "Tab 3 Content",
      color: "blue",
      backgroundColor: "gray",
      callback() {
        console.log(`${this.label} clicked.`);
      },
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);

  const grayBorder = "1px solid gray";

  const contentStyle = {
    border: grayBorder,
    padding: 10,
    marginTop: 15,
  };

  return (
    <div className="App">
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}
      >
        {tabs.map((tab, i) => {
          const labelStyles = {
            border: grayBorder,
            padding: "10px 70px",
            margin: "0 5px",
          };

          if (i === selectedIdx) {
            labelStyles.backgroundColor = tab.backgroundColor;
            labelStyles.color = tab.color;
          }

          return (
            <h2
              key={i}
              style={labelStyles}
              onClick={(event) => {
                setSelectedIdx(i);
                tabs[i].callback();
              }}
            >
              {tab.label} | idx: {i}
            </h2>
          );
        })}
      </div>
      <div style={contentStyle}>
        <h2>{tabs[selectedIdx].content}</h2>
      </div>
    </div>
  );
}

export default App;

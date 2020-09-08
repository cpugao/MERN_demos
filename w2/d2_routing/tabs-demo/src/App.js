import React, { useState } from "react";
import "./App.css";

import DisplayContent from "./components/DisplayContent";
import Tabs from "./components/Tabs";

function App() {
  // could have also had a key called isSelected to keep track of which is selected but then this array would need to be
  // part of state and use the spread ... operator to update it
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

  return (
    <div className="App">
      <Tabs
        tabs={tabs}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />
      <DisplayContent content={tabs[selectedIdx].content} />
    </div>
  );
}

export default App;

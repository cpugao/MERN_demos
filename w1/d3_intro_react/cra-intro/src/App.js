import React from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hello from create react app</h1>
      {/* <Counter></Counter> */}

      <Counter someProp="someValue" />

      {/* <button
        id="btn"
        onClick={() => {
          console.log("clicked!");
        }}
      >
        Click Me!
      </button> */}
    </div>
  );
}

export default App;

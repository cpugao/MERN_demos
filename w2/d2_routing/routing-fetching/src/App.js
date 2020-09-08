import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import Secondary from "./views/Secondary";
import Launches from "./views/Launches";
import SingleLaunch from "./views/SingleLaunch";

function App() {
  return (
    <div className="App">
      <Link to="/">Homepage</Link> <Link to="/secondary">Secondary</Link>{" "}
      <Link to="/launches">All Launches</Link>
      <Router>
        <Homepage path="/" />
        <Secondary path="/secondary" />
        <Launches path="/launches" />
        <SingleLaunch path="/launches/:id" />
        <Redirect from="/home" to="/" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;

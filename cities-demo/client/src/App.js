import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import NewCity from "./views/NewCity";
import Cities from "./views/Cities";

function App() {
  return (
    <div className="App container">
      <Link to="/cities">Cities</Link> <Link to="/cities/new">New City</Link>
      <hr />
      <Router>
        <Redirect from="/" to="/cities" noThrow="true" />
        <NewCity path="/cities/new" />
        <Cities path="/cities" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;

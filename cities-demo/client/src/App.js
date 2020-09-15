import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import NewCity from "./views/NewCity";
import Cities from "./views/Cities";
import SingleCity from "./views/SingleCity";
import EditCity from "./views/EditCity";

function App() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-center">
        <h1 class="navbar-brand">Cool City, Bro</h1>
        <div class="navbar-nav justify-content-between">
          <Link to="/cities">
            {/* The span is only needed because className doesn't work directly on a component tag */}
            <span className="btn btn-sm btn-outline-primary mr-1">Cities</span>
          </Link>
          <Link to="/cities/new">
            <span className="btn btn-sm btn-outline-primary">New City</span>
          </Link>
        </div>
      </nav>

      <div style={{ marginTop: "10%" }}>
        <Router>
          <Redirect from="/" to="/cities" noThrow="true" />
          <NewCity path="/cities/new" />
          <Cities path="/cities" />
          <SingleCity path="/cities/:id" />
          <EditCity path="/cities/:id/edit" />
          <NotFound default />
        </Router>
      </div>
    </div>
  );
}

export default App;

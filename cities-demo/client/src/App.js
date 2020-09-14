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
      <Link to="/cities">Cities</Link> <Link to="/cities/new">New City</Link>
      <hr />
      <Router>
        <Redirect from="/" to="/cities" noThrow="true" />
        <NewCity path="/cities/new" />
        <Cities path="/cities" />
        <SingleCity path="/cities/:id" />
        <EditCity path="/cities/:id/edit" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;

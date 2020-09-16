import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NewPost from "./views/NewPost";
import Posts from "./views/Posts";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/posts/new">New Post</Link> | <Link to="/posts">Posts</Link>
      </nav>
      <Router>
        <NewPost path="/posts/new" />
        <Posts path="/posts" />
      </Router>
    </div>
  );
}

export default App;

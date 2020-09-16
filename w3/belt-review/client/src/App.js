import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NewPost from "./views/NewPost";
import Posts from "./views/Posts";
import Post from "./views/Post";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/posts/new">New Post</Link> | <Link to="/posts">Posts</Link>
      </nav>
      <Router>
        <NewPost path="/posts/new" />
        <Posts path="/posts" />
        <Post path="/posts/:id" />
      </Router>
    </div>
  );
}

export default App;

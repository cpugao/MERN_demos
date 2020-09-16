const Post = require("../models/post.model");

// export an object that is full of methods
module.exports = {
  // long-form - key: value format
  create: function (req, res) {
    console.log("create  method executed");
    // .create is async, we don't know exactly when it will finish, so it returns a promise
    // which we need to use .then to know when it's fulfilled
    // req.body is the data in the form that was POSTed or the data POSTed from postman
    Post.create(req.body)
      // post is just a param name, can be named anything
      // this is the newly created post that the db returned
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        // so that axios' .catch will be triggered
        // for validation errors and other errors
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    console.log("getAll method executed");

    Post.find()
      .then((posts) => {
        res.json(posts);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    // .find will always return an array even if only one object is found
    // Post.find({ _id: req.params.id })
    Post.findById(req.params.id) // .findById returns only one object, no array
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Post.findByIdAndDelete(req.params.id)
      .then((post) => {
        // the post that was deleted or null if id not found
        res.json(post);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // alternative way to delete
  delete2(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Post.findById(req.params.id)
      // this .then is for the .findById
      .then((post) => {
        post
          .remove()
          // .then for after the .remove finishes
          .then((removedPost) => {
            res.json(removedPost);
          })
          .catch((err) => {
            // error from the .remove
            res.json(err);
          });
      })
      .catch((err) => {
        // error from the findById if the findById .then doesn't happen
        res.json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    Post.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((post) => {
        // the post with updated information
        console.log("update method .then");
        res.json(post);
      })
      .catch((err) => {
        // so that axios' .catch will be triggered
        // for validation errors and other errors
        console.log("update method .catch");
        res.status(400).json(err);
      });
  },
};

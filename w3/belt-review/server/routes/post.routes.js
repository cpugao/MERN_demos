const postController = require("../controllers/post.controller");

module.exports = (app) => {
  // in DJango: path("api/posts", views.create_post)
  app.post("/api/posts", postController.create);
  app.get("/api/posts", postController.getAll);
  // this must come before the one below or else the one below will think
  // "find" from the url is the id and will cause an error
  // app.get("/api/posts/EXAMPLE", postController.getAll);
  app.get("/api/posts/:id", postController.getOne);
  app.delete("/api/posts/:id", postController.delete);
  app.put("/api/posts/:id", postController.update);
};

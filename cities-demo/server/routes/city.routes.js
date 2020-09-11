const cityController = require("../controllers/city.controller");

module.exports = (app) => {
  // in DJango: path("api/cities", views.create_city)
  app.post("/api/cities", cityController.create);
  app.get("/api/cities", cityController.getAll);
  // this must come before the one below or else the one below will think
  // "find" from the url is the id and will cause an error
  app.get("/api/cities/find", cityController.findByFormInfo);
  app.get("/api/cities/:id", cityController.getOne);
  app.delete("/api/cities/:id", cityController.delete);
  app.put("/api/cities/:id", cityController.update);
};

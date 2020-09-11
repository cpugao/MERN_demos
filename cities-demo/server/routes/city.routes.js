const cityController = require("../controllers/city.controller");

module.exports = (app) => {
  // in DJango: path("api/cities", views.create_city)
  app.post("/api/cities", cityController.create);
  app.get("/api/cities", cityController.getAll);
  app.get("/api/cities/:id", cityController.getOne);
  app.delete("/api/cities/:id", cityController.delete);
  app.put("/api/cities/:id", cityController.update);
};

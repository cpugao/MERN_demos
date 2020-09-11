const cityController = require("../controllers/city.controller");

module.exports = (app) => {
  // in DJango: path("api/cities", views.create_city)
  app.post("/api/cities", cityController.create);
};

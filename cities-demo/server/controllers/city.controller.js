const City = require("../models/city.model");

// export an object that is full of methods
module.exports = {
  // long-form - key: value format
  create: function (req, res) {
    console.log("create  method executed");
    // .create is async, we don't know exactly when it will finish, so it returns a promise
    // which we need to use .then to know when it's fulfilled
    // req.body is the data in the form that was POSTed or the data POSTed from postman
    City.create(req.body)
      // city is just a param name, can be named anything
      // this is the newly created city that the db returned
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        // so that axios' .catch will be triggered
        // for validation errors and other errors
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    console.log("getAll method executed");

    City.find()
      .then((cities) => {
        res.json(cities);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    // .find will always return an array even if only one object is found
    // City.find({ _id: req.params.id })
    City.findById(req.params.id) // .findById returns only one object, no array
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    City.findByIdAndDelete(req.params.id)
      .then((city) => {
        // the city that was deleted or null if id not found
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // alternative way to delete
  delete2(req, res) {
    console.log("delete method executed", "url params:", req.params);

    City.findById(req.params.id)
      // this .then is for the .findById
      .then((city) => {
        city
          .remove()
          // .then for after the .remove finishes
          .then((removedCity) => {
            res.json(removedCity);
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

    City.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((city) => {
        // the city with updated information
        console.log("update method .then");
        res.json(city);
      })
      .catch((err) => {
        // so that axios' .catch will be triggered
        // for validation errors and other errors
        console.log("update method .catch");
        res.status(400).json(err);
      });
  },

  // extra, if you want a form submission or postman submission to find by multiple keys
  findByFormInfo(req, res) {
    City.find(req.body)
      .then((cities) => {
        res.json(cities);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

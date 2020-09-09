const port = 8000;
const express = require("express");

const app = express();

// req.body WILL BE UNDEFINED without this, this is needed for our server to be able to receive JSON in a request
app.use(express.json());

// in python views files:
// path("/", views.methodName)
app.get("/", (req, res) => {
  // res.send("Hello from express");
  res.json({ hello: "world" });
});

// alternative way of writing the .get("/")
// const indexCallback = (req, res) => {
//   res.send("Hello from express");
// };

// app.get("/", indexCallback);

app.get("/api/cities/:id", (req, res) => {
  res.json({
    // since we have no database we can't retrieve the cities info
    // so just pass back the id for now
    city: {
      id: req.params.id,
    },
  });
});

app.get("/api/cities", (req, res) => {
  res.json({
    cities: [
      {
        id: 1,
        name: "Aogashima",
        population: 170,
      },
      {
        id: 2,
        name: "Longyearbyen",
        population: 2144,
      },
      {
        id: 3,
        name: "Kennedy Meadows",
        population: 28,
      },
    ],
  });
});

app.post("/api/cities", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    // send back the data that was received from the postman request
    // b/c we have no where to put it (no database)
    city: req.body,
  });
});

// :id is a route parameter, just like a function parameter, we don't know yet what the value will be
// so it's a placeholder until the request actually happens and then the data will be at that position of the URL
app.delete("/api/cities/:id", (req, res) => {
  console.log(req.params);

  res.json({
    status: "success",
    msg: `Deleted city id: ${req.params.id}`,
  });
});

app.put("/api/cities/:id", (req, res) => {
  console.log(req.body);

  res.json({
    status: "success",
    msg: `Updated city id: ${req.params.id}`,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});

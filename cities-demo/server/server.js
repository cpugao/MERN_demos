const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "cities-demo";

// const mongooseConfigFunc = require("./config/mongoose.config");
// mongooseConfigFunc(db_name);
// shorthand of above
require("./config/mongoose.config")(db_name);

const app = express();

// req.body undefined without this!
app.use(express.json());

require("./routes/city.routes")(app);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);

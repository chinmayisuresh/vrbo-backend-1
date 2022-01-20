const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = 2238;

//controllers

const placeController = require("./controllers/placeController");

const cityController = require("./controllers/cityController");

const userController = require("./controllers/userController");

//
app.use("/place", placeController);

app.use("/city", cityController);

app.use(userController);

app.listen(port, async () => {
  await connect();

  console.log(`listening to port ${port}`);
});

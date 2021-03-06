const path = require("path");
const express = require("express");
const morgan = require("morgan");

const mongoose = require("mongoose");

const app = express();

// connecting to db

mongoose
  .connect("mongodb://localhost/crud-mongo")
  .then((db) => console.log("DB connected"))
  .catch((err) => console.log(err));

// importing routes
const indexRoutes = require("./routes/index");

// setings
app.set("port", process.env.PORT || 9999);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", indexRoutes);

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

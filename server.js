const express = require("express");
const apiRoutes = require("./routes/api.js");
const htmlRoutes = require("./routes/view.js");
const mongoose = require("mongoose");
const path = require("path")
const logger = require("morgan");
const app = express();
var PORT = process.env.PORT || 3001;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

app.use(apiRoutes);
app.use(htmlRoutes);


// Listen on port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
const express = require("express");
const apiRoutes = require("./routes/api.js");
const htmlRoutes = require("./routes/view.js");
const mongoose = require("mongoose");
const path = require("path")
const logger = require("morgan");
const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true }, {useFindAndModify: false})

app.use(apiRoutes);
app.use(htmlRoutes);


// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port http://localhost:3000");
});

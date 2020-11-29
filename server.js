// Your assignment is to define the routes below. Good luck!

const express = require("express");
const mongoose = require("mongoose");

const logger = require("morgan");
// const User = require("./userModel.js")
const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", {useNewUrlParser: true})





// Find all books marked as read
app.get("/", (req, res) => {
res.send(index.html);
});



// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port http://localhost:3000");
});

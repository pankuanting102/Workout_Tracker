

const express = require("express");
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/view");
const mongoose = require("mongoose");
const path = require("path")
const logger = require("morgan");
// const seeder = require("./seeders/seed");
const User = require("./models/workouts.js")
const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true })

app.use("/api", apiRoutes);
app.use(htmlRoutes);


// seeder.connect("mongodb://localhost/sample-dev", function() {
 
//   // Load Mongoose models
//   seeder.loadModels([
//     './models/workouts.js',
//   ]);
 
//   // Clear specified collections
//   seeder.clearModels("UserSchema", function() {
 
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
 
//   });
// });

app.get("/", (req, res) => {
    res.send(index.html);
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
})

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"))
})

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port http://localhost:3000");
});

const router = require("express").Router();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(index.html);
});

app.get("/exercise", (req, res) => {
    res.sendFile(exercise.html)
})

app.get("/stats", (req, res) => {
    console.log("get")
    res.sende(stats.html)
})

module.exports = router;
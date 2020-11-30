const router = require("express").Router();
const Workout = require("../models/workouts.js");


router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    
})

router.put("/api/workouts/:id", ({body, params}, res) => {

});

router.get("/api/workouts/range", (req, res) => {

});

router.delete("/api/workouts", ({body}, res) => {

})
module.exports = router;
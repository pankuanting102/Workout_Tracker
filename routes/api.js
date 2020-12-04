const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(result => {
            res.json(result);
        })
        .catch(err => {

            res.json(err);
        });
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.update({_id: req.params.id},
        {
            $push: {exercises: req.body}
        }).then(dbUpdate => {
            res.send(dbUpdate)
        })
        
    
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.deleteMany().then(() => {
        res.json(true)
    }).catch(err => {
        res.json(err);
    });

});

module.exports = router;
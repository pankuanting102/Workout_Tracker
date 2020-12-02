const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter exercise type"
                },

                name: {
                    type: String,
                    trim: true,
                    required: "Please enter excercise name"
                },

                distance: {
                    type: Number,
                    trim: true,
                    min: [1, 'Please enter at least 1 mile'],
                },

                duration: {
                    type: Number,
                    trim: true,
                    min: [1, 'Please enter at least 1 min'],
                },

                reps: {
                    type: Number
                },

                sets: {
                    type: Number
                },

                weight: {
                    type: Number
                },
            }
        ]


    },
    // {
    //     toJSON: {
    //         virtuals: true
    //     }
    // }
);

workoutSchema.virtual("totalDuratioon").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

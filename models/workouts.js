const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },

        exercise: [
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


    }
)

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;

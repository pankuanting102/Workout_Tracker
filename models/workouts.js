const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
type: {
    type: String,
    trim: true,
    required: "Please enter exercise type"
},

name: {
    type: String,
    trim: true,
    required: "Please enter your name"
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
}
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
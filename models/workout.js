const mongoose = require("mongoose");

//Schema for the MongoDB
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate()))
    },
    exercises: [{
      type: { type: String },
      name: { 
        type: String,
        trim: true,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      distance: {
        type: Number,
        required: true
      },
      weight: {
        type: Number,
        required: true
      },        
      reps: {
        type: Number,
        required: true
      },        
      sets: {
        type: Number,
        required: true
      }
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

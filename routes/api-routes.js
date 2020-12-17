// const router = require("express").Router();
// const Workout = require("../models/Workout.js");
var db = require("../models");

module.exports = function(app) {

  app.post("/api/workouts/", ({body}, res) => {
    console.log("workouts", body);
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("workout ID", body, params.id);
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: [body] } }, { new: true})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/", (req, res) => {
    db.Workout.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

};
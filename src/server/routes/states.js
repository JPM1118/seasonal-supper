const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const State = require("./../models/State");

router.get("/:state", (req, res, next) => {
  const state = req.params.state;
  State.find({ state: state })
    .select("-__v")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          state: doc
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for state provided." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;

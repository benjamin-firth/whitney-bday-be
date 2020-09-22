'use strict';

var mongoose = require('mongoose'),
  Count = mongoose.model('Counts');

exports.initial_get = async (req, res, next) => {
  try {
    res.status(200).send("Hi, It works!");
  } catch (err) {
    next(err);
  };
};

exports.list_all_counts = async (req, res, next) => {
  try {
    Count.find({}, function(err, count) {
      if (err)
        res.send(err);
      res.json(count);
    });
  } catch (err) {
    next(err);
  };
};

exports.create_a_count = async (req, res, next) => {
  try {
    var new_count = new Count(req.body);
    new_count.save(function(err, count) {
      if (err)
        res.send(err);
      res.json(count);
    });
  } catch (err) {
    next(err);
  };
};

// exports.update_a_task = function(req, res) {
//   Count.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

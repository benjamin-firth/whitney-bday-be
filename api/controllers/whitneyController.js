'use strict';

var mongoose = require('mongoose'),
  Count = mongoose.model('Counts');

exports.list_all_counts = function(req, res) {
  Count.find({}, function(err, count) {
    if (err)
      res.send(err);
    res.json(count);
  });
};

exports.create_a_count = function(req, res) {
  var new_count = new Count(req.body);
  new_count.save(function(err, count) {
    if (err)
      res.send(err);
    res.json(count);
  });
};

// exports.update_a_task = function(req, res) {
//   Count.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

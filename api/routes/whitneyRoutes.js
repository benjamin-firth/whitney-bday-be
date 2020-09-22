'use strict';
module.exports = function(app) {
  var whitneyCount = require('../controllers/whitneyController');

  // whitneyCount Routes
  app.route('/')
    .get(whitneyCount.list_all_counts)
    .post(whitneyCount.create_a_count);

  app.route('/count')
    .get(whitneyCount.list_all_counts)
    .post(whitneyCount.create_a_count);


  // app.route('/tasks/:taskId')
  //   .put(whitneyCount.update_a_task);
};
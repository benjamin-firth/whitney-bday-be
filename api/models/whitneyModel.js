'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CountSchema = new Schema({
  current_amount: {
    type: Number,
    default: 1
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Counts', CountSchema);
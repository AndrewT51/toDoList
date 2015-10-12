var mongoose = require('mongoose');

var task = new mongoose.Schema({
  task: String,
  date: String,
  isComplete: {type: Boolean, default: false}
});

task.methods.completeTask = function(cb){
  this.isComplete = !this.isComplete;
  this.save(cb);

};


module.exports = mongoose.model('Task', task)
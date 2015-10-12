var express = require('express');
var router = express.Router();
var mongoose =require('mongoose')
var Task = require('../models/schema')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getTask',function(req,res){
  Task.find({}, function(err,list){
    res.send(list);
  })
})

router.post('/addTask', function(req,res){
  console.log(req.body);
  Task.create({
    task: req.body.task,
    date: req.body.date,
    isComplete: req.body.isComplete
  }, function(err, success){
    if(err){
      res.send(200)
    }
    res.send('Success')
  })
})

router.put('/completeTask/:taskId', function(req,res){
  Task.findById(req.params.taskId, function(err,task){
    task.completeTask();
    console.log(task)
    task.save(function(err,savedTask){
      res.send(savedTask)
    });
  })
 
})




module.exports = router;

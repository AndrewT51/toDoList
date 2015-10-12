'use strict';

var app = angular.module('sample',['ui.router']);

app.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
  //   .state('home', {
  //     url: '/', 
  //     templateUrl: '/templates/home.html',
  //     controller: 'home'
  // })
    .state('todo', {
      url: '/', 
      templateUrl: '/templates/todo.html',
      controller: 'todo'
  })
    $urlRouterProvider.otherwise('todo');
})

// app.controller('home', function($scope){
//   console.log('working');
// })


app.controller('todo', function($scope,$http){
  $scope.taskArr = [];
  $http.get('http://localhost:3000/getTask')
    .then(function successCallback(response){
      $scope.taskArr = response.data;
      console.log(response.data)

    }, function errorCallback(response){
      console.log(response)

    });
  $scope.addTask = function(){
    $scope.task.isComplete = false;
    $scope.taskArr.push($scope.task);
    // $scope.task = {};
    console.log($scope.taskArr);
    $http.post('http://localhost:3000/addTask', {
      task: $scope.task.task,
      date: $scope.task.date,
      isComplete: $scope.task.isComplete
    } )
    console.log($scope.task.task)

  }


  $scope.taskDone = function(){
    this.savedTask.isComplete = !this.savedTask.isComplete;
    var toPost = this.savedTask.isComplete;
    $http.put('http://localhost:3000/completeTask/'+this.savedTask._id)
    .then(function (data){
      console.log(data);
    })


  }
})







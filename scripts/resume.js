/// <reference path="angular-1.2.14.js" />
var app = angular.module('resume', ['components']);
app.controller('Resume', function ($scope, $http) {
  $http.get('fixture/jim-andreasen.js')
    .then(function (res) {
      $scope.math = window.Math;
      $root = "Jim";
      //Add every property (no need for "resume." in front of EVERY value)
      for (var k in res.data) $scope[k] = res.data[k];
    });
});

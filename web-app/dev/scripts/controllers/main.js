'use strict';

/**
 * @ngdoc function
 * @name meanMvcBoilerplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanMvcBoilerplate
 */
angular.module('meanMvcBoilerplate')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

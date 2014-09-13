'use strict';

/**
 * @ngdoc function
 * @name meanMvcBoilerplate.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanMvcBoilerplate
 */
angular.module('meanMvcBoilerplate')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

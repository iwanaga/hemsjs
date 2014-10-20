'use strict';

angular.module('hemsjsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl',
        views: {
            heatIndex: {
                templateUrl: 'app/heatIndex/heatIndex.html',
                controller: 'HeatIndexCtrl'
            },
            airConditioner: {
                templateUrl: 'app/airConditioner/airConditioner.html',
                controller: 'AirConditionerCtrl'
            }
        }
      });
  });
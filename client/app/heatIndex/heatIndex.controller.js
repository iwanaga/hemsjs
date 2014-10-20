'use strict';

angular.module('hemsjsApp').controller('HeatIndexCtrl', function ($scope, $http, socket) {
    $scope.thermoHygro = {};

    socket.socket.on('ThermoHygroHistory:save', function (thermoHygro) {
        $scope.thermoHygro = thermoHygro;
    });
    $http.get('/api/thermoHygroHistories/last').success(function (thermoHygro) {
        $scope.thermoHygro = thermoHygro;
    });
});

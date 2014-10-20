'use strict';

angular.module('hemsjsApp').controller('AirConditionerCtrl', function ($scope, $log, socket) {
    $scope.togglePower = function () {
        socket.socket.emit('AC:toggle');
    };

    socket.socket.on('AC:toggled', function (data) {
        $log.log('エアコンの電源を切り替えました');
    });
});

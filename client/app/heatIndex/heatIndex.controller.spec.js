'use strict';

describe('Controller: HeatindexCtrl', function () {

  // load the controller's module
  beforeEach(module('hemsjsApp'));

  var HeatindexCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeatindexCtrl = $controller('HeatindexCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

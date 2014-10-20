'use strict';

describe('Controller: AirconditionerCtrl', function () {

  // load the controller's module
  beforeEach(module('hemsjsApp'));

  var AirconditionerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AirconditionerCtrl = $controller('AirconditionerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

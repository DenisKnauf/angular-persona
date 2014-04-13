'use strict';

// TODO: docs

var persona = angular.module('persona', []);

persona.service('Persona', function ($window){

  if (!$window.navigator) {
    throw {
      name: 'LibraryRequired',
      message: 'The Persona library is required. Please include https://login.persona.org/include.js in your html'
    };
  }

  // Forward arguments to the library
  this.watch = function () {
    $window.navigator.id.watch.apply(this,arguments);
  };

  // Forward arguments to the library
  this.request = function () {
    $window.navigator.id.request.apply(this,arguments);
  };

  // Forward arguments to the library
  this.logout = function () {
    $window.navigator.id.logout.apply(this,arguments);
  };
});

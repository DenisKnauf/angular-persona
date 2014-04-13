'use strict';

// TODO: docs

var persona = angular.module('persona', []);

persona.provider('Persona', function() {

  function Persona($window) {
    console.log($window)
  }

  this.$get = function($window) {
    return new Persona($window);
  };
});

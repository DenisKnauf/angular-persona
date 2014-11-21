'use strict';

describe('Service: Persona', function () {

  beforeEach(module('persona'));

  it('should throw an error if the Persona library is absent', function () {

    var $window = {
      navigator: {}
    };

    module(function ($provide) {
      $provide.value('$window', $window);
    });

    var injectPersona = function () {
      inject(function (Persona) {console.log(Persona);});
    };

    expect(injectPersona).toThrow();
  });

  describe('method: watch', function () {
    var $window = {
      navigator: {
        id: {
          watch: jasmine.createSpy()
        }
      }
    };

    beforeEach(module(function ($provide) {
      $provide.value('$window', $window);
    }));

    it('should call the watch method on the Persona library', inject(function (Persona) {
      Persona.watch({object: true});
      expect($window.navigator.id.watch).toHaveBeenCalledWith({object: true});
    }));
  });

  describe('method: request', function () {
    var $window = {
      navigator: {
        id: {
          request: jasmine.createSpy()
        }
      }
    };

    beforeEach(module(function ($provide) {
      $provide.value('$window', $window);
    }));

    it('should call the request method on the Persona library', inject(function (Persona) {
      Persona.request({object: true});
      expect($window.navigator.id.request).toHaveBeenCalledWith({object: true});
    }));
  });

  describe('method: logout', function () {
    var $window = {
      navigator: {
        id: {
          logout: jasmine.createSpy()
        }
      }
    };

    beforeEach(module(function ($provide) {
      $provide.value('$window', $window);
    }));

    it('should call the logout method on the Persona library', inject(function (Persona) {
      Persona.logout({object: true});
      expect($window.navigator.id.logout).toHaveBeenCalledWith({object: true});
    }));
  });

});

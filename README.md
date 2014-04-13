Angular-Persona
===============

angular-persona is a collection of services and directives to make easy the
integration with [Mozilla Persona](https://developer.mozilla.org/en/Persona).

Install
-------

To use angular-persona you have to:

1. include in your index.html the Persona javascript library

    ```<script src="https://login.persona.org/include.js"></script>```

2. install angular-persona with bower:

    ```bower install angular-persona```

3. In your ```index.html```, after the persona library, include the
angular-persona file

    <script src="bower_components/angular-persona/angular-persona.min.js"></script>

In your module declaration you have to include the persona module

    var module = angular.module('yourModule', [
        ...
        'persona',
    ]);

Configuration
-------------

USAGE
-----

TODO

DEVELOPMENT
-----------

TODO

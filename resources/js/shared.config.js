(function () {
    'use strict';

    var app = angular.module('shared', ['blockUI','ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider','$urlMatcherFactoryProvider','blockUIConfig',
        function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, blockUIConfig) {

            // Reference: http://angular-ui.github.io/ui-router/site/#/api/ui.router.util.$urlMatcherFactory
            $urlMatcherFactoryProvider.caseInsensitive(true);
            $urlMatcherFactoryProvider.strictMode(false);

            setupBlockUI(blockUIConfig);
            
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/state1");
            //
            // Now set up the states
            $stateProvider
              .state('state1', {
                url: "/",
                templateUrl: "partials/state1.html"
              })
              .state('state1.list', {
                url: "/list",
                templateUrl: "partials/state1.list.html",
                controller: function($scope) {
                  $scope.items = ["A", "List", "Of", "Items"];
                }
              })
              .state('state2', {
                url: "/state2",
                templateUrl: "partials/state2.html"
              })
              .state('state2.list', {
                url: "/list",
                templateUrl: "partials/state2.list.html",
                controller: function($scope) {
                  $scope.things = ["A", "Set", "Of", "Things"];
                }
              });
        }]);


    // Reference: https://github.com/McNull/angular-block-ui
    function setupBlockUI(blockUIConfig) {
        blockUIConfig.delay = 0;
        blockUIConfig.autoBlock = false;
    }
})();
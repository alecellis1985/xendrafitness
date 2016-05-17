(function () {
    'use strict';
     angular.module('shared').config(['$stateProvider', '$urlRouterProvider','$urlMatcherFactoryProvider','blockUIConfig',
        function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, blockUIConfig) {

            // Reference: http://angular-ui.github.io/ui-router/site/#/api/ui.router.util.$urlMatcherFactory
            $urlMatcherFactoryProvider.caseInsensitive(true);
            $urlMatcherFactoryProvider.strictMode(false);

            setupBlockUI(blockUIConfig);
            
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/index");
            //
            // Now set up the states
            $stateProvider
              .state('index', {
                url: '/index',
                templateUrl: 'resources/widgets/homepage.html',
                controller:'homeCtrl',
                controllerAs:'vm'
              });
        }]);
/*
 * .state('state2', {
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
 */

    // Reference: https://github.com/McNull/angular-block-ui
    function setupBlockUI(blockUIConfig) {
        blockUIConfig.delay = 0;
        blockUIConfig.autoBlock = false;
    }
})();
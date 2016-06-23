(function () {
    'use strict';
    //use: appear-target="pepe" effect="debounce" this will happen when current element where direcive is used is seen
    angular.module('shared').directive('appearTarget', appear);

    function appear() {
        var directive = {
            link: link,
            scope: {
                effect: '@'
            },
            restrict: 'A'
        }
        return directive;

        function link(scope, element, attrs) {
            $(element).appear(function ()
            {
                $(attrs.appearTarget).addClass(scope.effect);
            });
        }
    }
}());

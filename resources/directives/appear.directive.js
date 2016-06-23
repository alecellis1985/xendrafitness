(function () {
    'use strict';
    //use: appear-target="pepe" effect="debounce" this will happen when current element where direcive is used is seen
    angular.module('shared').directive('appearTarget', appearTarget);

    function appearTarget() {
        var directive = {
            link: link,
            scope: {
                effect: '@'
            },
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            $(element).appear(function ()
            {
                $(attrs.appearTarget).addClass(scope.effect);
            });
        }
    }
})();

(function () {
    'use strict';
    //use: appear-target="pepe" effect="debounce" this will happen when current element where direcive is used is seen
    angular.module('shared').directive('appearTargets', appearTargets);

    function appearTargets() {
        var directive = {
            link: link,
            scope: {
                targetEffects: '='
            },
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.targetEffects.forEach(function(elem){
                $(element).appear(function ()
                {
                    $(elem.appearTarget).addClass(elem.effect);
                });
            });
        }
    }
})();

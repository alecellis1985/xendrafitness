(function () {
    'use strict';
    angular.module('shared').directive('goTop', goTop);

    function goTop() {
        var directive = {
            restrict: 'A',
            scope: {
                scrollTopOf: '@'
            },
            link: link
        }
        return directive;

        function link(scope, element, attrs) {
            element.click(function () {
                $(scope.scrollTopOf).animate(
                        {
                            scrollTop: 0 // Scroll to top of body
                        }, attrs.goTop);
            });
            
            scope.$on('$destroy',
                    function () {
                        element.off('click');
                    }
            );
        }
    }

})();
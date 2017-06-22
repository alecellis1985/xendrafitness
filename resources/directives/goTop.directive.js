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
    };

    return directive;

    function link(scope, element, attrs) {
      element.click(function () {
        $('html, body').stop().animate({scrollTop: $(scope.scrollTopOf).offset().top - 70}, 1500, 'easeInOutExpo');
      });
      scope.$on('$destroy',
      function () {
        element.off('click');
      }
      );
    }
  }
})();
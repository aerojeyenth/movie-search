(function() {
  'use strict';

  angular
    .module('movieApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, NProgress) {

    $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.resolve) {
        NProgress.start();
      }
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      if (toState.resolve) {
        NProgress.done();
      }
    });

  }

})();

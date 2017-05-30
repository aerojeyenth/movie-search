(function() {
  'use strict';

  angular
    .module('movieApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, NProgress) {

    $log.debug('runBlock end');

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (toState.resolve) {
        NProgress.start();
      }
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (toState.resolve) {
        NProgress.done();
      }
    });

  }

})();

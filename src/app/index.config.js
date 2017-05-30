(function() {
  'use strict';

  angular
    .module('movieApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, NProgress) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Enable HTML5 Url
    $locationProvider.html5Mode(true);

    //Disable Spinner in the top loader
    NProgress.configure({ showSpinner: false });

  }

})();

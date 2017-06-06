(function() {
  'use strict';

  angular
    .module('movieApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, NProgress, $uiViewScrollProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Enable HTML5 Url
    $locationProvider.html5Mode(true);

    //Scroll To Top on Route Change
    $uiViewScrollProvider.useAnchorScroll();

    //Disable Spinner in the top loader
    NProgress.configure({ showSpinner: false });

  }

})();

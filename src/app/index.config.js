(function() {
  'use strict';

  angular
    .module('movieApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Enable HTML5 Url
    $locationProvider.html5Mode(true);

  }

})();

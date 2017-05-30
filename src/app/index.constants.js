/* global $:false, NProgress:false, Rx:false */
(function() {
  'use strict';

  angular
    .module('movieApp')
    .constant('Rx', Rx)
    .constant('$', $)
    .constant('NProgress', NProgress);

})();

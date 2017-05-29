/* global malarkey:false, moment:false, Bloodhound:false, $:false, Handlebars:false, Rx:false */
(function() {
  'use strict';

  angular
    .module('movieApp')
    .constant('malarkey', malarkey)
    .constant('Bloodhound', Bloodhound)
    .constant('Handlebars', Handlebars)
    .constant('Rx', Rx)
    .constant('$', $)
    .constant('moment', moment);

})();

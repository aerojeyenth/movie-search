(function() {
  'use strict';

  angular
    .module('app.pages.details', [])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $log) {

    $stateProvider
      .state('details', {
        url: '/details?id',
        templateUrl: 'app/details-page/details.html',
        controller: 'DetailsController',
        controllerAs: 'vm',
        resolve: {
          movie:  function($http, $stateParams){
            return $http.get('https://api.themoviedb.org/3/movie/'+ $stateParams.id +'?api_key=6101bba1eadfefbac6a1e1549e861665')
              .then (function (res) {
                return res.data;
              }, function (err) {
                $log.error(err);
                $log.error("can not load the resource!");
              });
          }
        }

      });

  }

})();

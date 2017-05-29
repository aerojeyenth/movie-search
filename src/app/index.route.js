(function() {
  'use strict';

  angular
    .module('movieApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        resolve: {
          trendingMovies: function ($http) {
            return $http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6101bba1eadfefbac6a1e1549e861665')
              .then(function (res) {
                return res.data.results;
              });
          },
          upcomingMovies: function ($http) {
            return $http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2017-05-24&api_key=6101bba1eadfefbac6a1e1549e861665')
              .then(function (res) {
                return res.data.results;
              });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();

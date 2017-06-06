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

            var storedValue = localStorage.getItem('trendingMovies');
            var lastUpdate = localStorage.getItem('trendingMoviesUpdateTime');

            var duration = lastUpdate ? (lastUpdate - (new Date).getTime()) : 0;

            if(duration > 3600000)
                storedValue = null;

            var httpRequest = $http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6101bba1eadfefbac6a1e1549e861665')
              .then(function (res) {
                localStorage.setItem('trendingMovies', angular.toJson(res.data.results));
                localStorage.setItem('trendingMoviesUpdateTime', (new Date).getTime());
                return res.data.results;
              });

            return storedValue ? angular.fromJson(storedValue) : httpRequest;

          },
          upcomingMovies: function ($http) {

            var storedValue = localStorage.getItem('upcomingMovies');
            var lastUpdate = localStorage.getItem('upcomingMoviesUpdateTime');

            var duration = lastUpdate ? (lastUpdate - (new Date).getTime()) : 0;

            if(duration > 3600000)
              storedValue = null;

            var today = new Date();
            var queryDate = (today.getFullYear() + 1) + '-' + today.getMonth() + '-' +  today.getDate();

            var httpRequest = $http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=' + queryDate +'&api_key=6101bba1eadfefbac6a1e1549e861665')
              .then(function (res) {
                localStorage.setItem('upcomingMovies', angular.toJson(res.data.results));
                localStorage.setItem('upcomingMoviesUpdateTime', (new Date).getTime());
                return res.data.results;
              });

            return storedValue ? angular.fromJson(storedValue) : httpRequest;
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();

(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $state, Rx, trendingMovies, upcomingMovies, $) {
    var vm = this;

    vm.viewDetails = viewDetails;

    vm.trendingMovies = trendingMovies;
    vm.upcomingMovies = upcomingMovies;


    document.body.style.backgroundImage = null;
    document.body.style.background = "linear-gradient(to right,#053565 0%,#0167a6 70%,#007ec6 100%)";

    var genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

    vm.genreIdKeys = {};


    function searchTMDB(query){
      return $http.get('https://api.themoviedb.org/3/search/movie?query='+ query + '&api_key=6101bba1eadfefbac6a1e1549e861665')
    }

    var input = document.getElementById("search-bar");

    var keyups$ = Rx.Observable.fromEvent(input, 'input')
      .map(function (e) {
        return e.target.value;
      })
      .filter(function (text) {
        return text.length > 3;
      })
      .delay(750)
      .do(function () {
        NProgress.start();
      })
      .distinctUntilChanged();

    var searcher = keyups$.switchMap(searchTMDB);

    searcher.subscribe(function (res) {
      NProgress.done();
      vm.searchResults = res.data.results;
      console.log(vm.searchResults);
    });

    function viewDetails(id) {
      $state.go('details', {id: id});
    }

    genres.forEach(function(genre){
      vm.genreIdKeys[genre.id] = genre.name;
    });


    $('#search-bar').on('focus', function() {
      var that = this;
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: document.body.scrollTop + that.getBoundingClientRect().top - 10
      }, 300);

    });


  }
})();



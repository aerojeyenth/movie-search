(function() {
  'use strict';

  angular
    .module('app.pages.details')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($stateParams, movie) {
    var vm = this;

    vm.movie = movie;

    document.body.style.background = "#000 no-repeat fixed 50% 50%";
    document.body.style.backgroundImage = 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')';


    // document.body.style.background = "no-repeat #000";
    // document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundImage = 'url(https://image.tmdb.org/t/p/original' +vm.movie.backdrop_path + ')';

  }

})();

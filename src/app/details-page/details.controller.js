(function() {
  'use strict';

  angular
    .module('app.pages.details')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController(movie, $anchorScroll, document) {
    var vm = this;

    vm.movie = movie;

    //Scroll to top of the screen
   $anchorScroll();

    document.body.style.background = "#000 no-repeat fixed 50% 50%";
    document.body.style.backgroundImage = 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')';

  }

})();

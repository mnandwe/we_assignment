var myApp = angular.module('myApp', [
  'ngRoute',
  'movieControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:movieId', {
    templateUrl: 'partials/movie.html',
    controller: 'ItemController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
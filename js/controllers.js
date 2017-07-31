var movieControllers = angular.module('movieControllers', []);

var key='?api_key=[APIKEY]';
var url='https://api.themoviedb.org/3/movie/popular';

movieControllers.controller('ListController', ['$scope', '$http','$window', function($scope, $http,$window) {
	if($window.innerWidth <=360) {
		$scope.w_width='w154';
	}else if($window.innerWidth >360 && $window.innerWidth <= 480 ) {
		$scope.w_width='w185';
	}else if($window.innerWidth >480 && $window.innerWidth <= 960 ) {
		$scope.w_width='w342';
	}else if($window.innerWidth >960) {
		$scope.w_width='w500';
	}else{
		$scope.w_width='w185';
	}
	console.log($window.innerWidth+"cc");
	$http.get(url+key).success(function(data) {
		$scope.movies = data.results;
		$scope.movieOrder = 'name';
	});
}]);

movieControllers.controller('ItemController', ['$scope', '$http','$routeParams','$window', function($scope, $http, $routeParams,$window) {
	var urlBase='https://api.themoviedb.org/3/movie/';
	var id=$routeParams.movieId;
	if($window.innerWidth <=360) {
		$scope.w_width='w92';
	}else if($window.innerWidth >360 && $window.innerWidth <= 480 ) {
		$scope.w_width='w154';
	}else if($window.innerWidth >480 && $window.innerWidth <= 960 ) {
		$scope.w_width='w185';
	}else if($window.innerWidth >960) {
		$scope.w_width='w342';
	}else{
		$scope.w_width='w185';
	}
	$http.get(urlBase+id+key).success(function(data) {
		$scope.movie = data;
		$scope.movie.release_date=$scope.movie.release_date.split('-')[0];
	});
}]);


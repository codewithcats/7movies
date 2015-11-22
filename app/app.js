var app = angular.module('7movies', []);

app.controller('mainController', ['$http', function($http) {
    this.title = '7Movies';
    $http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1')
        .then(function(response) {
            var json = response.data;
            this.movie = json;
        }.bind(this));

    this.select = function(ep) {
        $http.get('http://www.omdbapi.com/?i='+ep.imdbID+'&plot=short&r=json')
        .then(function(response) {
            this.episode = response.data;
        }.bind(this));
    };
}]);

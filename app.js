// app.js
var app = angular.module('angularJSApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        })
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

// Controllers
app.controller('LoginController', ['$scope', '$location', function($scope, $location) {
    $scope.user = {};
    $scope.errorMessage = '';

    $scope.login = function() {
        if ($scope.user.username === 'admin' && $scope.user.password === 'password') {
            $location.path('/home');
        } else {
            $scope.errorMessage = 'Invalid username or password.';
        }
    };
}]);

app.controller('HomeController', ['$scope', '$location', function($scope, $location) {
    $scope.message = 'Welcome to the Home Screen';

    $scope.navigate = function(destination) {
        $location.path('/' + destination);
    };
}]);

app.controller('AboutController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the About Page';
}]);

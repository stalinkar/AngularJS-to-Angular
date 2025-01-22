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
        .when('/projects', {
            templateUrl: 'projects.html',
            controller: 'ProjectsController'
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

// Prevent AngularJS from handling `/admin`
app.run(['$rootScope', '$window', function($rootScope, $window) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (next && next.originalPath === '/admin') {
            event.preventDefault();
            $window.location.href = 'http://localhost:4200/admin'; // Full page navigation to Angular 19
        }
    });
}]);

app.controller('HomeController', ['$scope', '$location', function($scope, $location) {
    $scope.message = 'Welcome to the Home Screen';

    // $scope.navigate = function(destination) {
    //     $location.path('/' + destination);
    // };
    $scope.navigate = function(destination) {
        if (destination === 'admin') {
            window.location.href = 'http://localhost:4200/admin'; // Navigate directly to Angular 19 Admin
        }else{
            $location.path('/' + destination);
        }
    };
}]);

app.controller('AboutController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the About Page';
}]);
app.controller('ProjectsController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the Projects Page';
}]);

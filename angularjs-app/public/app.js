const app = angular.module("hybridApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/login.html",
      controller: "LoginController",
    })
    .when("/home", {
      templateUrl: "views/home.html",
      controller: "HomeController",
    })
    .when("/admin", {
      templateUrl: "views/admin.html",
      controller: "AdminController",
    })
    // .when("/projects", {
    //   templateUrl: "views/projects.html",
    //   controller: "ProjectsController",
    // })
    .when("/about", {
      template: "<div class='container mt-4'><h1>About Page</h1><p>This is the About Page.</p></div>",
    })
    .otherwise({
      redirectTo: "/",
    });
});

app.run(function ($rootScope, $location) {
  // Listen to route changes
  $rootScope.$on("$routeChangeStart", function (event, next) {
    const token = sessionStorage.getItem("token"); // Get the JWT token from sessionStorage

    // Redirect to login if no token is found and the user is trying to access a protected page
    if (!token && next.templateUrl !== "views/login.html") {
      $location.path("/"); // Redirect to login page
    }
  });
});

app.factory("AuthService", function ($http) {
  return {
    login: function (credentials) {
      return $http.post("/api/login", credentials);
    },
  };
});

app.controller("LoginController", function ($scope, $http, $location, AuthService) {
  $scope.credentials = { username: "", password: "" };

  $scope.login = function () {
    AuthService.login($scope.credentials)
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        $location.path("/home");
      })
      .catch((error) => {
        alert("Invalid login credentials");
      });
  };
});

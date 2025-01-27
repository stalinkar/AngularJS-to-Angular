app.controller("HomeController", function ($scope, $http) {
  $scope.home = {};

  $http
    .get("/api/data", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    })
    .then((response) => {
      $scope.home = response.data.home;
    })
    .catch((error) => {
      console.error("Error fetching home data", error);
    });
});

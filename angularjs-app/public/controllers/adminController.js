app.controller("AdminController", function ($scope, $http) {
  $scope.users = [];

  $http
    .get("/api/data", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    })
    .then((response) => {
      $scope.users = response.data.users;
    })
    .catch((error) => {
      console.error("Error fetching admin data", error);
    });
});

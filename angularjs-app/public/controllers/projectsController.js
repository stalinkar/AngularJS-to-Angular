app.controller("ProjectsController", function ($scope, $http) {
    $scope.projects = [];
  
    $http
      .get("/api/data", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then((response) => {
        $scope.projects = response.data.projects;
      })
      .catch((error) => {
        console.error("Error fetching projects data", error);
      });
  });
  
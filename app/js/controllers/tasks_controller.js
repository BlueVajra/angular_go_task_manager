// with $resource
angular.module("app").controller("TasksController", function ($scope, TaskResource) {
  // because the stubbed endpoint returns an array of results, .query() is used
  // if the endpoint returned an object, you would use .get()
  $scope.tasks = TaskResource.query();
});

// with $http
//angular.module("app").controller("TasksController", function ($scope, TaskService) {
//   $scope.tasks = TaskService.getTasks();
//});

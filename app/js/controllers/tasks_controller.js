angular.module("app").controller("TaskIndexController", function ($scope, Task) {
  $scope.tasks = Task.query();
});

angular.module("app").controller("TaskCreateController", function ($scope, $location, Task) {
    $scope.task = new Task();
    $scope.addTask = function() { //create a new movie. Issues a POST to /api/tasks
        $scope.task.$save(function() {
            $location.path("/tasks");
        });
    };
});


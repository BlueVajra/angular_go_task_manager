angular.module("app").factory("TaskService", function($q, $http) {

  var getTasks = function() {
    return $http.get('/api/tasks');
  };

  return { getTasks: getTasks };
});

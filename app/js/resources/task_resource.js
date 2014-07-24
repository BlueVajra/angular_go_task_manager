angular.module("app").factory("Task", function($q, $resource) {
  return $resource('http://107.170.31.184:8080/api/tasks');
});

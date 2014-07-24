angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

//  $routeProvider.when('/login', {
//    templateUrl: 'login.html',
//    controller: 'LoginController'
//  });
//
//  $routeProvider.when('/home', {
//    templateUrl: 'home.html',
//    controller: 'HomeController'
//  });

  $routeProvider.when('/', {
    templateUrl: 'tasks/index.html',
    controller: 'TaskIndexController'
  });

  $routeProvider.when('/task/new', {
      templateUrl: 'tasks/new.html',
      controller: 'TaskCreateController'
    });

  $routeProvider.otherwise({ redirectTo: '/' });

});

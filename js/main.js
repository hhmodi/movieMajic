var app = angular.module('movieMajic', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/ACT1", {templateUrl: "partials/ACT1.html", controller: "PageCtrl"})
    .when("/ACT2", {templateUrl: "partials/ACT2.html", controller: "PageCtrl"})
    .when("/ACT3", {templateUrl: "partials/ACT3.html", controller: "PageCtrl"})
	
	.when('/ACT4', {templateUrl: 'partials/ACT4.html', controller: 'ListController'})
	.when('/studios', {templateUrl: 'partials/studios.html', controller: 'ListController'})
	   
	// else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);
/**
 * Controls all Pages
 */
app.controller('PageCtrl', function () {
  console.log("Page Controller reporting for duty.");


  $('.carousel').carousel({
    interval: 5000
  });


  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});


/**
 * angular routes
 */
angular.module('MathDays', [
	'ngRoute',
	'ngResource',
	'ngTouch',
	'ngAnimate',
	'MathControllers',
])
.config(['$routeProvider',  function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller : HomeController,
			templateUrl: 'home.html',
		})
		.when('/month/:month?', {
			controller : MonthController,
			templateUrl: 'birthmonth.html',
		})
		.when('/month/:month/day/:day?', {
			controller : DayController,
			templateUrl: 'birthday.html',
		})
		.when('/month/:month/day/:day/year/:year?', {
			controller : YearController,
			templateUrl: 'birthyear.html',
		})
		.when('/month/:month/day/:day/year/:year/result', {
			controller : CalculateController,
			templateUrl: 'mathbirthday.html',
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

//register app manually, we don't have ng-app="app"
angular.bootstrap(document, ['MathDays']);
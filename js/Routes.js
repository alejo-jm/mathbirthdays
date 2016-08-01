/**
 * anngular routes
 */
angular.module('MathDays', [
	'ngRoute',
	'ngResource',
	'ngTouch',
	'ngCookies',
	'MathControllers',
	// 'BotServices',
	// 'appHttp'
	// 'ui.bootstrap',
	// 'angularFileUpload',
	// 'appHttp',
	// 'pokerControllers',
	// 'pokerServices',
	// 'pokerDirectives'
])
.config(['$routeProvider',  function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller : HomeController,
			templateUrl: 'home.html',
		})
		.when('/mathbirthday/month', {
			controller : MonthController,
			templateUrl: 'birthmonth.html',
		})
		.when('/mathbirthday/day', {
			controller : DayController,
			templateUrl: 'birthday.html',
		})
		.when('/mathbirthday/year', {
			controller : YearController,
			templateUrl: 'birthyear.html',
		})
		.when('/mathbirthday', {
			controller : CalculateController,
			templateUrl: 'mathbirthday.html',
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

//register app manually, we don't have ng-app="app"
angular.bootstrap(document, ['MathDays']);
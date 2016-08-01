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
		.otherwise({
			redirectTo: '/'
		});
}]);

//register app manually, we don't have ng-app="app"
angular.bootstrap(document, ['MathDays']);
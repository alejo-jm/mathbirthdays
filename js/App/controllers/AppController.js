/**
 * AppController main scope for the app
 * @access public
 * @type {Array}
 */
angular.module('MathControllers', []).controller('AppController', AppController);

AppController.$inject = ['$scope', '$rootScope', '$location', '$timeout', '$route', '$window'];
function AppController($scope, $rootScope, $location, $timeout, $route, $window) {

	//debug classNames
	// setInterval(function(){
	// 	console.log($('.content').attr('class'));
	// });
	$scope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
		console.log('locationChangeStart', newUrl, oldUrl);
	});

	// $scope.$on('$locationChangeSuccess', function() {
	// 	$scope.currentpath = $location.path();
	// 	console.log($scope.currentpath);

	// });



}
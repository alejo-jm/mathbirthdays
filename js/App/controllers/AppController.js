
/**
 * AppController main scope for the app
 * @access public
 * @type {Array}
 */
angular.module('MathControllers', []).controller('AppController', AppController);

AppController.$inject = ['$scope', '$rootScope', '$location', '$timeout', '$cookieStore', '$route'];
function AppController($scope, $rootScope, $location, $timeout, $cookieStore, $route){
	/**
	 * shortcur to root scope
	 * @type {scope}
	 */
	var root = $scope.root;


}
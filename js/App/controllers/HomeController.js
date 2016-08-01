/**
 * HomeController
 * @access public
 * @type {Array}
 */
HomeController.$inject = ['$scope', '$location', '$timeout', '$routeParams'];
function HomeController($scope, $location, $timeout, $routeParams){
	/**
	 * shortcur to root scope
	 * @type {scope}
	 */
	var root = $scope.$root;

	/**
	 * we are ready activate the animations
	 */
	$timeout(function(){
		$('.wrapviews').addClass('view-animated');
	});

}
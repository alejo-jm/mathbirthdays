/**
 * MonthController
 * @access public
 */
MonthController.$inject = ['$scope', '$location', '$timeout', '$routeParams'];
function MonthController($scope, $location, $timeout, $routeParams){
	/**
	 * shortcur to root scope
	 * @type {scope}
	 */
	var root = $scope.$root;

	/**
	 * setup month
	 * @type {string}
	 */
	$scope.month = Number($routeParams.month);

	/**
	 * activate back navigation only works in mobile
	 * @type {string}
	 */
	$timeout(function(){
		root.backNavigation = '#/';
	});

	/**
	 * submit the form get the month and validate
	 */
	$scope.submit = function (event) {
		event.preventDefault();
		if(!$scope.birthday.$valid)
			return $scope.birthday.$setDirty();

		$location.path('/month/'+$scope.month+'/day');
	};

}
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
	 * add focus for input
	 */
	root.addFocusInScope($scope);

	/**
	 * setup month if valid
	 */
	if(root.validateParams())
		$scope.month = Number($routeParams.month);

	/**
	 * activate back navigation only works in mobile
	 * @type {string}
	 */
	$timeout(function(){
		root.backNavigation = '#/';
		$scope.ready = true;
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
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
	$scope.month = root.data.month;

	/**
	 * submit the form get the month and validate
	 */
	$scope.submit = function (event) {
		event.preventDefault();
		if(!$scope.birthday.$valid)
			return $scope.birthday.$setDirty();

		root.data.month = $scope.month;
		$location.path('/mathbirthday/day');
	};

}
/**
 * DayController
 * @access public
 */
DayController.$inject = ['$scope', '$location', '$timeout', '$routeParams'];
function DayController($scope, $location, $timeout, $routeParams){
	/**
	 * shortcur to root scope
	 * @type {scope}
	 */
	var root = $scope.$root;

	/**
	 * setup day
	 * @type {string}
	 */
	$scope.day = root.data.day;

	/**
	 * submit the form get the day and validate
	 */
	$scope.submit = function (event) {
		event.preventDefault();
		if(!$scope.birthday.$valid)
			return $scope.birthday.$setDirty();

		root.data.day = $scope.day;
		$location.path('/mathbirthday/year');
	};

}
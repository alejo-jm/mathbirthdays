/**
 * YearController
 * @access public
 */
YearController.$inject = ['$scope', '$location', '$timeout', '$routeParams'];
function YearController($scope, $location, $timeout, $routeParams){
	/**
	 * shortcur to root scope
	 * @type {scope}
	 */
	var root = $scope.$root;

	/**
	 * setup day
	 * @type {string}
	 */
	$scope.month = $routeParams.month;
	$scope.day   = $routeParams.day;


	/**
	 * submit the form get the day and validate
	 */
	$scope.submit = function (event) {
		event.preventDefault();
		if(!$scope.birthday.$valid)
			return $scope.birthday.$setDirty();

		$location.path('/month/'+$routeParams.month+'/day/'+$routeParams.day+'/year/'+$scope.year+'/result');
	};

}
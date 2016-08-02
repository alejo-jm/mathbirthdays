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
	 * setup month and day
	 * @type {string}
	 */
	$scope.month = Number($routeParams.month);
	$scope.day   = Number($routeParams.day);

	/**
	 * activate back navigation only works in mobile
	 * @type {string}
	 */
	$timeout(function(){
		root.backNavigation = '#/month/'+$routeParams.month;
	});

	/**
	 * submit the form get the day and validate
	 */
	$scope.submit = function (event) {
		event.preventDefault();
		if(!$scope.birthday.$valid)
			return $scope.birthday.$setDirty();

		$location.path('/month/'+$routeParams.month+'/day/'+$scope.day+'/year');
	};

}
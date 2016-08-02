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
	$scope.month = Number($routeParams.month);
	$scope.day   = Number($routeParams.day);
	$scope.year  = Number($routeParams.year);

	/**
	 * activate back navigation only works in mobile
	 * @type {string}
	 */
	$timeout(function(){
		root.backNavigation = '#/month/'+$scope.month+'/day/'+$scope.day;
	});


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
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
	 * timeout promise function
	 * @type {Promise}
	 */
	var promise = $timeout(function(){
		$('input').get(0).focus();
	},500);

	/**
	 * cancel promise on destroy
	 */
    $scope.$on("$destroy", function() {
		$timeout.cancel(promise);
    });

	/**
	 * setup day
	 * @type {string}
	 */
	$scope.month = $routeParams.month ? Number($routeParams.month): null;
	$scope.day   = $routeParams.day   ? Number($routeParams.day)  : null;
	$scope.year  = $routeParams.year  ? Number($routeParams.year) : null;
	$scope.currentYear = new Date().getFullYear();

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
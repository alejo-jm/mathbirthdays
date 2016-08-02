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
	 * timeout promise function
	 * @type {Promise}
	 */
	var promise = $timeout(function(){
		if($('input').get(0))
			$('input').get(0).focus();
	},500);

	/**
	 * cancel promise on destroy
	 */
    $scope.$on("$destroy", function() {
    	if(promise)
			$timeout.cancel(promise);
    });

	/**
	 * setup month and day
	 * @type {string}
	 */
	$scope.month = $routeParams.month ? Number($routeParams.month): null;
	$scope.day   = $routeParams.day   ? Number($routeParams.day)  : null;

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
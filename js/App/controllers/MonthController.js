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
	 * setup month
	 * @type {string}
	 */
	$scope.month = $routeParams.month ? Number($routeParams.month) : null;

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
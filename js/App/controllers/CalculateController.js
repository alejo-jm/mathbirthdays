/**
 * CalculateController
 * @access public
 */
CalculateController.$inject = ['$scope', '$location', '$timeout', '$routeParams'];
function CalculateController($scope, $location, $timeout, $routeParams){
	/**
	 * shortcur to root scope
	 * @type {scope}
	 */
	var root = $scope.$root;

	/**
	 * get params from $routeParams
	 * @type {Object}
	 */
	var month = $routeParams.month;
	var day   = $routeParams.day;
	var year  = $routeParams.year;

	/**
	 * include momentjs
	 */
	require(['js/bower_components/moment/min/moment.min.js'], calculate);

	/**
	 * user selected date object as Number
	 * @type {Object}
	 */
	var userBirth = {
		month : !Number(month - 1) ? 12 : Number(month - 1),
		day   : Number(day),
		year  : Number(year)
	};

	/**
	 * the user birthday is valid
	 * @type {Boolean}
	 */
	$scope.invalidDate = false;

	/**
	 * calcute the next birday and make a pow for the age of the user
	 * @param  {Function} moment
	 * @return {void}
	 */
	function calculate (moment) {
		if(!moment(userBirth.year+userBirth.month+userBirth.day).isValid("YYYYMD")){
			$scope.invalidDate = true;
			return $scope.$apply();
		}
		console.log(userBirth);
		var strAgeDate = moment(userBirth.year+' '+userBirth.month+' '+userBirth.day, "YYYY M D").fromNow();
		console.log(strAgeDate);
		var numAgeDate = Number(strAgeDate.replace(/\D+/g, ''));
		console.log(numAgeDate);
		numAgeDate = !numAgeDate ? 1 : numAgeDate;
		$scope.powX = Math.pow(10, numAgeDate);
		$scope.dateInFuture = month+'-'+day+'-'+(new Date().getFullYear() + 1);
		$scope.$apply();
	}
}
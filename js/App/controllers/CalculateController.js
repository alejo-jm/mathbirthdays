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
	$scope.params = $routeParams;

	/**
	 * activate back navigation only works in mobile
	 * @type {string}
	 */
	$timeout(function(){
		root.backNavigation = '#/month/'+month+'/day/'+day+'/year/'+year;
	});

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
	 * get if the birthday for this year already happend
	 * @return {boolean}
	 */
	function compareBirthDates () {
		var today = new Date();
		var thisYearBirthday = new Date(new Date().getFullYear(), month, day);
		return today >= thisYearBirthday;
	}

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

		var sumToAge = compareBirthDates() ? 1 : 0;
		var strAgeDate = moment(userBirth.year+' '+userBirth.month+' '+userBirth.day, "YYYY M D").fromNow();
		var numAgeDate = Number(strAgeDate.replace(/\D+/g, '')) + sumToAge;
		numAgeDate = !numAgeDate ? 1 : numAgeDate;
		$scope.powX = Math.pow(10, numAgeDate);
		$scope.dateInFuture = month+'/'+day+'/'+(new Date().getFullYear() + 1);
		$scope.$apply();

		$timeout(function(){
			$('.thinking').addClass('hide');
			$('.result').removeClass('hide');
		}, 1000);
	}
}
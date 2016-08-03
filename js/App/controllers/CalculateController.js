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
	if(!root.validateParams()){
		$scope.invalidDate = true;
		return;
	}

	/**
	 * momentjs instance
	 * @type {function}
	 */
	var moment = null;

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
		return moment().isSameOrAfter(moment().format('YYYY')+'-'+month+'-'+day);
	}

	/**
	 * fix month
	 * @param  {string} stringMonth
	 * @return {Number}
	 */
	function fixMonth (stringMonth) {
		var numMonth = Number(stringMonth) - 1;
		var newMonth = numMonth > 0 ? numMonth : 11;
		newMonth = newMonth.toString();
		return newMonth.length == 1 ? '0'+newMonth : newMonth;
	}

	/**
	 * calcute the next birday and make a pow for the age of the user
	 * @param  {Function} moment
	 * @return {void}
	 */
	function calculate (momentLib) {
		moment = momentLib;

		var newDate  = moment(year+month+day, 'YYYYMMDD').subtract(1, 'months').format('YYYYMMDD');
		var yearsOld = moment().diff(newDate, 'years');
		var sumToAge = compareBirthDates() ? 1 : 0;

		yearsOld = !yearsOld ? 1 : yearsOld + sumToAge;

		$scope.powX = Math.pow(10, yearsOld);
		$scope.dateInFuture = moment(moment().add(1, 'years').format('YYYY')+month+day, 'YYYYMMDD').format('MM/DD/YYYY');
		$scope.$apply();

		$timeout(function(){
			$('.thinking').addClass('hide');
			$('.result').removeClass('hide');
		}, 1000);
	}
}
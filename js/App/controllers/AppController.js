/**
 * AppController main scope for the app
 * @access public
 * @type {Array}
 */
angular.module('MathControllers', []).controller('AppController', AppController);

AppController.$inject = ['$scope', '$rootScope', '$location', '$timeout', '$route', '$routeParams'];
function AppController($scope, $rootScope, $location, $timeout, $route, $routeParams) {
	//debug classNames
	// setInterval(function(){
	// 	console.log($('.content').attr('class'));
	// });

	/**
	 * promise for input focus
	 */
	var promiseInputFocus = null;

	/**
	 * setup base class for animations can be forward or backward
	 */
	$scope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
		if(newUrl.length == oldUrl.length){
			return true;
		}
		if(newUrl.length > oldUrl.length)
			$('.wrapviews').addClass('forward').removeClass('backward');
		if(newUrl.length < oldUrl.length)
			$('.wrapviews').addClass('backward').removeClass('forward');

	});

	/**
	 * remove hide for back button only for mobile
	 */
	if(isMobile.any)
		$rootScope.$watch('backNavigation', function(value){
			$('.navigation .nolink')[value ? 'removeClass' : 'addClass']('hide');
		});


	/**
	 * validate number and regex for day, month and year
	 * @return {boolean}
	 */
	$rootScope.validateParams = function(){
		var urlParams = ['month', 'day', 'year'];
		var regex = [/^(0[1-9]|1[0-2])$/, /^(0[1-9]|[12]\d|3[01])$/, /(?:(?:19|20)[0-9]{2})/];
		for(var key in urlParams){
			if($routeParams[urlParams[key]]){
				if(isNaN(parseFloat($routeParams[urlParams[key]])))
					return false;
				if(!regex[key].test($routeParams[urlParams[key]]))
					return false;
			}
		}
		return true;
	};

	/**
	 * add focus for input element clear timeout promise
	 * @param {scope} $scope
	 */
	$rootScope.addFocusInScope = function($scope){

		promiseInputFocus = $timeout(function(){
			$('input').get(0).focus();
		},500);

		/**
		 * cancel promise on destroy
		 */
		$scope.$on("$destroy", function() {
			$timeout.cancel(promiseInputFocus);
			promiseInputFocus = null;
		});
	};

}
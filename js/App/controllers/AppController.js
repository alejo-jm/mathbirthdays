/**
 * AppController main scope for the app
 * @access public
 * @type {Array}
 */
angular.module('MathControllers', []).controller('AppController', AppController);

AppController.$inject = ['$scope', '$rootScope', '$location', '$timeout', '$route', '$window'];
function AppController($scope, $rootScope, $location, $timeout, $route, $window) {
	//debug classNames
	// setInterval(function(){
	// 	console.log($('.content').attr('class'));
	// });

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

}
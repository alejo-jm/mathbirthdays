/**
 * app bootstrap
 * @return {void}
 */
(function(){

	/**
	 * setup some paths need by anothers libs
	 * @type {Object}
	 */
	require.config({
		//remove cache when we are in debug state
		urlArgs: Config.debug ? 'v='+Date.now() : null,
		paths: {
			jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery',
		}
	});

	/*
	 * app scripts
	 * @type {Array} descendant dependency injector
	 */
	var scripts = [
		[
			'jquery',
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js',
		],
		[
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-route.min.js',
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-touch.min.js',
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-resource.min.js',
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-animate.min.js',
		],
		[	!Config.debug ? path+'/js/bot.app.min.js' : ''],
		[
			'js/App/controllers/AppController.js',
		],
		[
			'js/App/controllers/HomeController.js',
			'js/App/controllers/MonthController.js',
			'js/App/controllers/DayController.js',
			'js/App/controllers/YearController.js',
			'js/App/controllers/CalculateController.js'
		],
		[
			'js/Routes.js'
		]
	];

	/**
	 * current load array
	 * @type {Number}
	 */
	var count = 0;

	/**
	 * load scripts
	 * @return {void}
	 */
	scripts.load = function(){
		if(scripts[count]){
			require(scripts[count], scripts.load);
			count++;
		}
	};

	/**
	 * load all js files
	 * @return {void}
	 */
	scripts.load();

})();
/**
 * load all necesary files for tests
 */
(function(){

	var tester = [
		['js/bower_components/jasmine-core/lib/jasmine-core/jasmine.js'],
		['js/bower_components/jasmine-core/lib/jasmine-core/jasmine-html.js'],
		['js/bower_components/jasmine-core/lib/jasmine-core/boot.js'],
		['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-mocks.js'],
		['js/App/tests/TestsRunner.js'],
		[
			'js/App/tests/TestCalculateController.js',
		],

	];

	/**
	 * current load array
	 * @type {Number}
	 */
	var count = 0;

	/**
	 * load scripts and execute jasmine
	 * @return {void}
	 */
	tester.load = function(){
		if(tester[count]){
			require(tester[count], tester.load);
			count++;
			return;
		}
		JasmineExec();
	};

	/**
	 * load jasmine css
	 */
	tester.css  = function(url){
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = url;
		$('head').append(link);
	};

	/**
	 * add jasmine css
	 */
	tester.css('js/bower_components/jasmine-core/lib/jasmine-core/jasmine.css');

	/**
	 * load jasmine and tests
	 */
	tester.load();


})();
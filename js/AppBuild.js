/**
 * build app javascripts
 * @type {String}
 */
({
	baseUrl: "..",
	// name: "js/AppRoutes",
	out: "math.app.min.js",
	paths: {
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery",
    },
	include: [
		'js/bower_components/isMobile/isMobile.min.js',
		'js/App/controllers/AppController.js',
		'js/App/controllers/HomeController.js',
		'js/App/controllers/MonthController.js',
		'js/App/controllers/DayController.js',
		'js/App/controllers/YearController.js',
		'js/App/controllers/CalculateController.js'
	]
});
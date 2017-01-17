'use strict';

module.exports = function(app) {

	var serveStatic = require('serve-static');

	app.use(serveStatic(__dirname + '/../public'));
	app.use(serveStatic(__dirname + '/../bower_components'));
	app.use(serveStatic(__dirname + '/../node_modules'));
};

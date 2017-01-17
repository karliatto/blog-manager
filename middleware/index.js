'use strict';

module.exports = function(app) {

	require('./parsers')(app);
	require('./template')(app);
	require('./static')(app);
};

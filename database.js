'use strict';

var config = require('./config.js');

var db = module.exports = require('knex')({
	client: 'mysql',
	connection: config.dbOptions
});

db.schema.hasTable('posts').then(function(exists) {
	if (!exists) {
		return db.schema.createTable('posts', function(table) {
			table.increments('id');
			table.string('title');
			table.longtext('body');
			table.timestamp('published').defaultTo(db.fn.now());
		}).catch(console.log);
	}
});

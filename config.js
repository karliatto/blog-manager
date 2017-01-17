'use strict';

module.exports = {

	dbOptions : {
		host     : process.env.BLOG_HOST || '127.0.0.1',
		port     : parseInt(process.env.PRASE_DB_PORT || 3306),
		user     : process.env.BLOG_USER || 'blog',
		password : process.env.BLOG_PASSWORD || 'password',
		database : process.env.BLOG_DATABASE || 'blog',
		charset: 'utf8'
	},

	port : process.env.PORT || 3000
};

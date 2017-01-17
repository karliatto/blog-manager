'use strict';

var express = require('express');
var app = module.exports = express();

app.config = require('./config');
app.db = require('./database');

require('./middleware')(app);



var dbConfig = {
	client: 'mysql',
	connection: app.config.dbOptions
};

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

app.set('bookshelf', bookshelf);

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
};

app.use(allowCrossDomain);


require('./controllers')(app);

// elsewhere, to use the bookshelf client:
var bookshelf = app.get('bookshelf');

var Posts = bookshelf.Model.extend({
	tableName: 'posts'
});



app.get('/api/post', function(req, res) {
	Posts.fetchAll()
	.then(function(posts) {
		res.send(posts.toJSON());
	}).catch(function(error) {
		console.log(error);
		res.send('An error occured');
	});
});

app.put('/api/post/:id', function(req, res) {
	new Posts({id: req.params.id})
	.save({
		title: req.body.title,
		body: req.body.body,
	})
	.then(function(post) {
		res.send(post.toJSON());
	}).catch(function(error) {
		console.log(error);
		res.send('An error occured');
	});
});

app.delete('/api/post/:id', function(req, res) {
	new Posts({id: req.params.id})
	.destroy()
	.then(function(posts) {
		res.send(posts.toJSON());
	}).catch(function(error) {
		console.log(error);
		res.send('An error occured');
	});
});


app.post('/api/post/', function(req, res) {
	new Posts({
		title: req.body.title,
		body: req.body.body,
	}).save()
	.then(function(posts) {
		res.send(posts.toJSON());
	}).catch(function(error) {
		console.log(error);
		res.send('An error occured');
	});
});


const PORT = app.config.port;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
});

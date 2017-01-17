var app = app || {};

// Backbone Collection

app.Posts = Backbone.Collection.extend({
	url: '/api/post',
});

app.posts = new app.Posts();

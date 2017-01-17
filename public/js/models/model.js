
var app = app || {};


Backbone.Model.prototype.idAttribute = 'id';

// Backbone Model

app.Post = Backbone.Model.extend({
	defaults: {
		title: '',
		body: '',
		published: ''
	}

});

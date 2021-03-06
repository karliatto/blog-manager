var app = app || {};

// Backbone View for all posts

app.PostsView = Backbone.View.extend({
	model: app.posts,
	el: $('.posts-list'),
	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
		this.model.on('change', function() {
			setTimeout(function() {
				self.render();
			}, 30);
		},this);
		this.model.on('remove', this.render, this);

		this.model.fetch({
			success: function(response) {
				_.each(response.toJSON(), function(item) {
					console.log('Successfully GOT post with id: ' + item.id);
				})
			},
			error: function() {
				console.log('Failed to get posts!');
			}
		});
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(post) {
			self.$el.append((new app.PostView({model: post})).render().$el);
		});
		return this;
	}
});

app.postsView = new app.PostsView();

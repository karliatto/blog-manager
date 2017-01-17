var app = app || {};

// Backbone View for one post

app.PostView = Backbone.View.extend({
	model: new app.Post(),
	className: '#post',
	initialize: function() {
		this.template = _.template($('.posts-list-template').html());
	},
	events: {
		'click .edit-post': 'edit',
		'click .update-post': 'update',
		'click .cancel': 'cancel',
		'click .delete-post': 'delete',
		'click .bold-edit': 'bold',
		'click .italic-edit': 'italic',
		'click .underline-edit': 'underline',
		'click .align-left-edit': 'alignLeft',
		'click .align-center-edit': 'alignCenter',
		'click .align-right-edit': 'alignRight',
		'click .list-ul-edit': 'listUl',
		'click .list-ol-edit': 'listOl'
	},
	edit: function() {
		$('.edit-post').hide();
		$('.delete-post').hide();
		this.$('.update-post').show();
		this.$('.cancel').show();
		this.$('.read-more').hide();

		var title = this.$('.title').html();
		var body = this.$('.body').html();

		this.$('.title').html('<input type="text" class="title-update title-input" value="' + title + '">');
		this.$('.body').html('<div class="body-update editor body-input" contenteditable>'+body+'</div>');
		this.$('.toolbar-edit').show();
	},
	update: function() {
		this.model.set('title', $('.title-update').val());
		this.model.set('body', $('.body-update').html());

		this.model.save(null, {
			success: function(response) {
				console.log('Successfully UPDATED post with id: ' + response.toJSON().id);
			},
			error: function(err) {
				console.log('Failed to update post!');
			}
		});
	},
	cancel: function() {
		app.postsView.render();
	},
	delete: function() {
		this.model.destroy({
			success: function(response) {
				console.log('Successfully DELETED post with id: ' + response.toJSON().id);
			},
			error: function(err) {
				console.log('Failed to delete post!');
			}
		});
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	bold: function(){
		console.log('test')
		document.execCommand('bold', false, null);
	},
	italic: function(){
		console.log('test')
		document.execCommand('italic', false, null);
	},
	underline: function(){
		console.log('test')
		document.execCommand('underline', false, null);
	},
	alignLeft: function(){
		console.log('test')
		document.execCommand('justifyLeft', false, null);
	},
	alignRight: function(){
		console.log('test')
		document.execCommand('justifyRight', false, null);
	},
	alignCenter: function(){
		console.log('test')
		document.execCommand('justifyCenter', false, null);
	},
	listUl: function(){
		console.log('test')
		document.execCommand('insertUnorderedList', false, null);
	},
	listOl: function(){
		console.log('test')
		document.execCommand('insertOrderedList', false, null);
	}
});

var app = app || {};


// Backbone add a Post

app.EditView = Backbone.View.extend({
	model: new app.Post(),
	el : $(".new-post"),

	events: {
		'click .add-post': 'add',
		'click .bold': 'bold',
		'click .italic': 'italic',
		'click .underline': 'underline',
		'click .align-left': 'alignLeft',
		'click .align-center': 'alignCenter',
		'click .align-right': 'alignRight',
		'click .list-ul': 'listUl',
		'click .list-ol': 'listOl'
	},
	add: function(){
		var newPost = new app.Post({
			title: $('.title-input').val(),
			body: $('.body-input').html(),
			published: new Date().getTime()
		});
		$('.title-input').val('');
		$('.body-input').html('');
		app.posts.add(newPost);
		newPost.save(null, {
			success: function(response) {
				console.log('Successfully SAVED post with id: ' + response.toJSON().id);
			},
			error: function() {
				console.log('Failed to save post!');
			}
		});
	},

	bold: function(){
		console.log('add post view')
		document.execCommand('bold', false, null);
	},
	italic: function(){
		console.log('add post view')
		document.execCommand('italic', false, null);
	},
	underline: function(){
		console.log('add post view')
		document.execCommand('underline', false, null);
	},
	alignLeft: function(){
		console.log('add post view')
		document.execCommand('justifyLeft', false, null);
	},
	alignRight: function(){
		console.log('add post view')
		document.execCommand('justifyRight', false, null);
	},
	alignCenter: function(){
		console.log('add post view')
		document.execCommand('justifyCenter', false, null);
	},
	listUl: function(){
		console.log('add post view')
		document.execCommand('insertUnorderedList', false, null);
	},
	listOl: function(){
		console.log('add post view')
		document.execCommand('insertOrderedList', false, null);
	}
});


app.EditView = new app.EditView();

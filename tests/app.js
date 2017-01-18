
var should = chai.should();

describe("Application", function() {
	it("creates a global variable for the name space", function () {
		should.exist(app);
	})
	it("creates collections", function () {
		should.exist(app.posts);
	})
	it("creates posts views", function () {
		should.exist(app.postsView);
	})
})


describe("Post Model", function(){
	describe("Initialization", function() {
		beforeEach(function() {
			this.post = new app.Post();
		})
		it("should default the title to an empty string",function() {
			this.post.get('title').should.equal("");
		})
		it("should default the body to an empty string",function() {
			this.post.get('body').should.equal("");
		})
	})

	describe("Initialization with data", function() {
		beforeEach(function() {
			this.post = new app.Post({
				title: 'test',
				body : 'test',
				puslished: new Date().getTime()
			});
		})
		it("should be equal to data",function() {
			this.post.get('title').should.equal("test");
		})
		it("should be equal to data",function() {
			this.post.get('body').should.equal("test");
		})
	})
})

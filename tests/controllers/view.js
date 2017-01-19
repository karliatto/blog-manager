var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
chai.use(chaiHttp);
var app = require('../../index.js');

describe('testing view.js', function () {

	it('testing get /', function(done){
		chai.request(app)
		.get('/')
		.end(function(err, res){
			expect(res).to.have.status(200);
			done();
		})
	})

	it('testing get /api/post', function(done){
		chai.request(app)
		.get('/api/post')
		.end(function(err, res){
			expect(res).to.have.status(200);
			done();
		})
	})
}); // closing describe testing view.js

var expect = require('chai').expect;
var string = require('../src/index.js');

describe('String', function() {
	describe('repeat', function() {
		it("returns hihi when string is hi and times is 2", function(done) {
			string.repeat('hi',2, function(err, s) {
				expect(err).to.equal(null);
				expect(s).to.equal('hihi');
				done();
			})
		});

		it("return error when times is not a number", function(done) {
			string.repeat('hi', 'hi', function(err, s) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal("times must be a number");
				done();
			});
		});

		it("return error when times is less than 0", function(done) {
			string.repeat('hi', -1, function(err, s) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal("times must be greater than or equals 0");
				done();
			});
		});

		it("return error when times is Infinity", function(done) {
			string.repeat('hi', Infinity, function(err, s) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal("times must not be infinity");
				done();
			});
		});

		it("return error when times is null", function(done) {
			string.repeat('hi', null, function(err, s) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal("times must be not null");
				done();
			});
		});

		it("return error when string is null", function(done) {
			string.repeat(null, 1, function(err, s) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal("string must be not null");
				done();
			});
		});

		it("return error when string is not a string", function(done) {
			string.repeat(1, 2, function(err, s) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal("string must be a string");
				done();
			});
		});

	});
});
var expect = require('chai').expect;

describe('Feature: Homepage', function() {

  before(function(done) {
    browser
      .url('http://localhost:3000')
      .call(done)
  });

  it('has a title', function(done) {
    browser
      .getTitle(function(err, title) {
        expect(err).to.not.be.true
        expect(title).to.eql('Rachel Nolan');
      })
    .call(done)
  });

});

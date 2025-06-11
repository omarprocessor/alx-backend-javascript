const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  this.timeout(5000); // Add timeout for server startup

  it('should return correct status code', function(done) {
    request('http://localhost:4000', (error, response) => {
      if (error) {
        console.error('Test error:', error);
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct content', function(done) {
    request('http://localhost:4000', (error, response, body) => {
      if (error) {
        console.error('Test error:', error);
        done(error);
        return;
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

const request = require('supertest');
const app = require('./api');

describe('Cart API', function() {
  it('should return correct status code for valid cart', function(done) {
    request(app)
      .get('/cart/123')
      .expect(200)
      .end(done);
  });

  it('should return correct status code for invalid cart', function(done) {
    request(app)
      .get('/cart/abc')
      .expect(404)
      .end(done);
  });

  it('should return correct content for valid cart', function(done) {
    request(app)
      .get('/cart/123')
      .expect(200)
      .expect('Payment methods for cart 123')
      .end(done);
  });
});

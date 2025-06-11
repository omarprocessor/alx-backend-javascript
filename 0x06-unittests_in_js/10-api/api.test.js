const request = require('supertest');
const app = require('./api');

describe('Available payments', function() {
  it('should return correct status code', function(done) {
    request(app)
      .get('/available_payments')
      .expect(200)
      .end(done);
  });

  it('should return correct content type', function(done) {
    request(app)
      .get('/available_payments')
      .expect('Content-Type', /json/)
      .end(done);
  });

  it('should return correct content', function(done) {
    request(app)
      .get('/available_payments')
      .expect(200)
      .expect({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
      .end(done);
  });
});

describe('Login', function() {
  it('should return correct status code', function(done) {
    request(app)
      .post('/login')
      .send({ userName: 'test' })
      .expect(200)
      .end(done);
  });

  it('should return correct content', function(done) {
    request(app)
      .post('/login')
      .send({ userName: 'test' })
      .expect(200)
      .expect('Welcome test')
      .end(done);
  });
});

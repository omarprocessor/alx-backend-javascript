const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('API Tests', () => {
  let server;
  let baseUrl;

  before((done) => {
    server = app.listen(0, () => {
      baseUrl = `http://localhost:${server.address().port}`;
      done();
    });
  });

  after((done) => {
    server.close(done);
  });

  describe('GET /', () => {
    it('should return "Welcome to the payment system"', (done) => {
      request.get(`${baseUrl}/`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return payment methods for valid cart id', (done) => {
      request.get(`${baseUrl}/cart/47`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 47');
        done();
      });
    });

    it('should return 404 for invalid cart id', (done) => {
      request.get(`${baseUrl}/cart/hello`, (err, res) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return available payment methods', (done) => {
      request.get(`${baseUrl}/available_payments`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should welcome user with provided name', (done) => {
      request.post({
        url: `${baseUrl}/login`,
        json: true,
        body: { userName: 'Betty' }
      }, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should welcome anonymous user when no name provided', (done) => {
      request.post({
        url: `${baseUrl}/login`,
        json: true,
        body: {}
      }, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome ');
        done();
      });
    });
  });
});
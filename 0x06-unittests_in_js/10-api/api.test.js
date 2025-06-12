const request = require('request');
const { expect } = require('chai');
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('API Tests', () => {
  before(() => {
    app.listen(7865);
  });

  after(() => {
    app.close();
  });

  describe('GET /', () => {
    it('should return "Welcome to the payment system"', (done) => {
      request.get(`${baseUrl}/`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return "Payment methods for cart 123" when :id is a number', (done) => {
      request.get(`${baseUrl}/cart/123`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('should return 404 when :id is not a number', (done) => {
      request.get(`${baseUrl}/cart/hello`, (err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return correct payment methods', (done) => {
      request.get(`${baseUrl}/available_payments`, (err, res, body) => {
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
    it('should return "Welcome Betty" when userName is provided', (done) => {
      const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        json: { userName: 'Betty' },
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should return "Welcome " if no userName is provided', (done) => {
      const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        json: {},
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome ');
        done();
      });
    });
  });
});
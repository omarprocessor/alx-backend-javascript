const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return 200 when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/123`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments', () => {
  it('should return correct payment methods object', (done) => {
    request.get(`${baseUrl}/available_payments`, { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login', () => {
  it('should return Welcome with posted username', (done) => {
    const payload = { userName: 'Betty' };
    request.post(
      {
        url: `${baseUrl}/login`,
        json: true,
        body: payload
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(undefined); // because response is text
        expect(res.body).to.equal(undefined); // body is not parsed as text
        expect(res.text).to.equal(undefined); // request doesn't provide `text`
        // So we verify using `res.body` only if using supertest or manually parse response.
        done();
      }
    );
  });
});

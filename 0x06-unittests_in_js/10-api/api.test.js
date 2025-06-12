const request = require('supertest');
const app = require('./api');
const assert = require('assert');

describe('API tests', () => {
describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.text, 'Welcome to the payment system');
  });
});

describe('GET /available_payments', () => {
  it('should return payment methods', async () => {
    const res = await request(app).get('/available_payments');
    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(res.body, {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

describe('POST /login', () => {
  it('should return welcome message with username', async () => {
    const res = await request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .set('Content-Type', 'application/json');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.text, 'Welcome Betty');
  });
});
});

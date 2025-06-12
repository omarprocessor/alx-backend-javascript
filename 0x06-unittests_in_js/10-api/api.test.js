const request = require('supertest')
const { app, server } = require('./api')

describe('GET /available_payments', () => {
it('should return payment methods object', (done) => {
request(app)
.get('/available_payments')
.expect(200)
.expect({
payment_methods: {
credit_cards: true,
paypal: false
}
}, done)
})
})

describe('POST /login', () => {
it('should return welcome message with username', (done) => {
request(app)
.post('/login')
.send({ userName: 'Betty' })
.set('Content-Type', 'application/json')
.expect(200)
.expect('Welcome Betty', done)
})
})

after(() => {
server.close()
})

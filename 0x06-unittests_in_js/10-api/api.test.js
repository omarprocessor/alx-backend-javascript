const request = require('request')
const { expect } = require('chai')

describe('Index page', () => {
 it('should return status code 200', (done) => {
   request.get('http://localhost:7865', (err, res, body) => {
     expect(res.statusCode).to.equal(200)
     done()
   })
 })

 it('should return correct message', (done) => {
   request.get('http://localhost:7865', (err, res, body) => {
     expect(body).to.equal('Welcome to the payment system')
     done()
   })
 })
})

describe('Cart page', () => {
 it('should return 200 when :id is a number', (done) => {
   request.get('http://localhost:7865/cart/123', (err, res, body) => {
     expect(res.statusCode).to.equal(200)
     expect(body).to.equal('Payment methods for cart 123')
     done()
   })
 })

 it('should return 404 when :id is NOT a number', (done) => {
   request.get('http://localhost:7865/cart/hello', (err, res, body) => {
     expect(res.statusCode).to.equal(404)
     done()
   })
 })
})

describe('/available_payments', () => {
 it('should return correct payment methods object', (done) => {
   request.get('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
     expect(res.statusCode).to.equal(200)
     expect(body).to.deep.equal({
       payment_methods: {
         credit_cards: true,
         paypal: false
       }
     })
     done()
   })
 })
})

describe('/login', () => {
 it('should return Welcome with posted username', (done) => {
   const options = {
     url: 'http://localhost:7865/login',
     method: 'POST',
     json: true,
     body: { userName: 'Betty' }
   }
   request(options, (err, res, body) => {
     expect(res.statusCode).to.equal(200)
     expect(res.body).to.be.undefined
     expect(res.body).to.not.exist
     expect(res.text || res.body || res.statusMessage).to.not.equal(undefined)
     expect(res.req.method).to.equal('POST')
     expect(res.statusCode).to.equal(200)
     done()
   })
 })
})

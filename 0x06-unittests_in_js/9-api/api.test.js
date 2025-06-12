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

 it('should not return 404', (done) => {
   request.get('http://localhost:7865', (err, res, body) => {
     expect(res.statusCode).to.not.equal(404)
     done()
   })
 })
})

describe('Cart page', () => {
 it('should return 200 when :id is a number', (done) => {
   request.get('http://localhost:7865/cart/12', (err, res, body) => {
     expect(res.statusCode).to.equal(200)
     expect(body).to.equal('Payment methods for cart 12')
     done()
   })
 })

 it('should return 404 when :id is NOT a number', (done) => {
   request.get('http://localhost:7865/cart/hello', (err, res, body) => {
     expect(res.statusCode).to.equal(404)
     done()
   })
 })

 it('should return 404 when :id is missing', (done) => {
   request.get('http://localhost:7865/cart/', (err, res, body) => {
     expect(res.statusCode).to.equal(404)
     done()
   })
 })
})

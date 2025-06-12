const request = require('request')
const chai = require('chai')
const expect = chai.expect

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

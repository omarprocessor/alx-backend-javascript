const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', function() {
  let consoleSpy;

  beforeEach(function() {
    // Create spy for console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore spy
    consoleSpy.restore();
  });

  it('should log correct message for 100 and 20', function() {
    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleSpy);
  });

  it('should log correct message for 10 and 10', function() {
    sendPaymentRequestToAPI(10, 10);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleSpy);
  });
});

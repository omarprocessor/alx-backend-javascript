const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./4-payment');

describe('sendPaymentRequestToAPI', function() {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function() {
    // Create stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(require('./utils'), 'calculateNumber').returns(10);
    
    // Create spy for console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore stub and spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should return 10 when calling calculateNumber', function() {
    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
  });

  it('should log the correct message', function() {
    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');
  });
});

const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToAPI', function() {
  it('should call Utils.calculateNumber with correct parameters', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToAPI(100, 20);
    
    try {
      sinon.assert.calledOnce(spy);
      sinon.assert.calledWithExactly(spy, 'SUM', 100, 20);
    } finally {
      spy.restore();
    }
  });
});

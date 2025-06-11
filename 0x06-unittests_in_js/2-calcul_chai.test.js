const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should add numbers correctly', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUM', -1.5, 2.5)).to.equal(2);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should subtract numbers correctly', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUBTRACT', -1.5, 2.5)).to.equal(-4);
    });
  });

  describe('DIVIDE operation', function() {
    it('should divide numbers correctly', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when dividing by zero', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('DIVIDE', -1.5, 3)).to.equal(-0.3);
    });
  });

  describe('Invalid operations', function() {
    it('should throw error for invalid operation type', function() {
      expect(() => {
        calculateNumber('INVALID', 1, 2);
      }).to.throw('Invalid operation type');
    });
  });
});

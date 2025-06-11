const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should add numbers correctly', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -1.5, 2.5), 2);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should subtract numbers correctly', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 2.5), -4);
    });
  });

  describe('DIVIDE operation', function() {
    it('should divide numbers correctly', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0);
    });

    it('should return Error when dividing by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, 3), -0);
    });
  });

  describe('Invalid operations', function() {
    it('should throw error for invalid operation type', function() {
      assert.throws(() => {
        calculateNumber('INVALID', 1, 2);
      }, /Invalid operation type/);
    });
  });
});

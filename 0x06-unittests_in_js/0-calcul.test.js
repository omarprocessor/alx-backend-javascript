const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

// Test cases for calculateNumber function
describe('calculateNumber', function() {
  it('should return 4 when adding 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional test cases for edge cases
  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.5, 2.5), 2);
  });

  it('should handle zero', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle large numbers', function() {
    assert.strictEqual(calculateNumber(99999.4, 100000.6), 200000);
  });
});

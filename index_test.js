var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 5! === 120', () => {
      // Setup
        const expectedResult = 120
        const inputValue = 5
      // Exercise
        const result = Calculate.factorial(inputValue)
      // Verify
      assert.equal(result, expectedResult)
    })

    it('returns 3! === 6', () => {
      // Setup
        const expectedResult = 6
        const inputValue = 3
      // Exercise
        const result = Calculate.factorial(inputValue)
      // Verify
      assert.equal(result, expectedResult)
    })

    it('returns 1 when you pass in 0.', () => {
      const expectedResult  = 1
      const inputValue = 0

      const result = Calculate.factorial(inputValue)

      assert.equal(result, expectedResult)
    })
  });
});

assert.equal(Calculate.factorial(5), 120)
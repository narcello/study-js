// var assert = require('assert');

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  return x**n
}
describe("pow", function() {
  before(() => console.log("Testing started – before all tests"));
  after(() => console.log("Testing finished – after all tests"));

  it("raises to 5th power", function() {
    assert.equal(pow(2, 5), 32);
  })
  describe("raises x to power 3", function(){
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  })

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
});

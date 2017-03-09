const should = require('chai').should()

let bagi = require('../pembagian')

// assert.deepStrictEqual(bagi(5, 2), 2.5, 'Test 5 / 6')
//
// assert.deepStrictEqual(bagi(5, 1), 5, 'Test 5 / 1')
//
// assert.deepStrictEqual(bagi(20, 4), 5, 'Test 2 / 4')
//
// assert.deepStrictEqual(bagi(5, '6'), 'Parameters value must be number', 'Params must be a number')
//
// assert.deepStrictEqual(bagi(2), "You should add two parameters", 'Test without parameter')

describe('Test fungsi pembagian', () => {
  it('5 / 6 = 30', () => {
    bagi(5, 2).should.equal(2.5)
  })

  it('5 / 1 = 5', () => {
    bagi(5, 1).should.equal(5)
  })

  it('20 / 0.5 = 40', () => {
    bagi(20, 0.5).should.equal(40)
  })

  it("5 / '6'", () => {
    bagi(5, '6').should.equal('Parameters value must be number')
  })

  it('bagi(5)', () => {
    bagi(5).should.equal("You should add two parameters")
  })

})

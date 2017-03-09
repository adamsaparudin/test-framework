const should = require('chai').should()

let akar = require('../akaran')

describe('Test fungsi akar', () => {
  it('akar(25)', () => {
    akar(25).should.equal(5)
  })

  it('akar(81)', () => {
    akar(81).should.equal(9)
  })

  it('akar(64)', () => {
    akar(64).should.equal(8)
  })

  it("akar('25')", () => {
    akar('6').should.equal('Parameters value must be number')
  })

  it('akar(-12)', () => {
    akar(-12).should.equal(-12)
  })


})

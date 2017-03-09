const should = require('chai').should()

let kali = require('../perkalian')

describe('Test kali 5 * 6', () => {
  it('5 * 6 = 30', () => {
    kali(5, 6).should.equal(30)
  })
})

describe('Test kali 5 * -1', () => {
  it('5 * -1 = -5', () => {
    kali(5, -1).should.equal(-5)
  })
})

describe('Test kali 5 * 2', () => {
  it('5 * 2 = 10', () => {
    kali(5, 2).should.equal(10)
  })
})

describe("Test kali 5 * '6'", () => {
  it("5 * '6'", () => {
    kali(5, '6').should.equal('Parameters value must be number')
  })
})

describe('Test function kali with only 1 parameter', () => {
  it('kali(5)', () => {
    kali(5).should.equal("You should add two parameters")
  })
})

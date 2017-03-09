const should = require('chai').should()

let pangkat = require('../pangkat')

describe('Test pangkat 5 ^ 2', () => {
  it('5 ^ 2 = 25', () => {
    pangkat(5, 2).should.equal(25)
  })
})


describe('Test pangkat 81 ^ 1/2', () => {
  it('82 ^ 1/2', () => {
    pangkat(81, 1/2).should.equal(9)
  })
})


describe('Test pangkat 2 ^ 5', () => {
  it('2 ^ 5 = 25', () => {
    pangkat(2, 5).should.equal(32)
  })
})


describe("Test fungsi pangkat 5 dengan string '6' ", () => {
  it('5 + 6(string) = 11 ?', () => {
    pangkat(5, '6').should.equal('Parameters value must be number')
  })
})

describe('Test fungsi pangkat dengan 1 bilangan', () => {
  it('Test pangkat (5)', () => {
    pangkat(2).should.equal("You should add two parameters")
  })
})

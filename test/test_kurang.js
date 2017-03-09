const should = require('chai').should()

let kurang = require('../pengurangan')

describe('Test kurang 5 - 6', () => {
  it('5 - 6 = -1', () => {
    kurang(5, 6).should.equal(-1)
  })
})

describe('Test kurang 5 - -1', () => {
  it('5 - -1 = 6', () => {
    kurang(5, -1).should.equal(6)
  })
})

describe('Test kurang 5 - 2', () => {
  it('5 - 2 = 3', () => {
    kurang(5, 2).should.equal(3)
  })
})

describe("Test kurang 5 - '6'", () => {
  it("5 - '6'", () => {
    kurang(5, '6').should.equal('Parameters value must be number')
  })
})

describe('Test function kurang only 1 parameter', () => {
  it('kurang(5)', () => {
    kurang(5).should.equal('You should add two parameters')
  })
})

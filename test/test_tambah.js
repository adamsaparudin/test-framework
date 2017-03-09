const should = require('chai').should()

let tambah = require('../pertambahan')

describe('Test tambah 5 + 6', () => {
  it('5 + 6 = 11', () => {
    tambah(5, 6).should.equal(11)
  })
})


describe('Test tambah 5 + (-1)', () => {
  it('5 + (-1) = 4', () => {
    tambah(5, -1).should.equal(4)
  })
})


describe('Test tambah 5 + 2', () => {
  it('5 + 2 = 7', () => {
    tambah(5, 2).should.equal(7)
  })
})


describe("Test tambah 5 + '6'", () => {
  it('5 + 6(string) = 11 ?', () => {
    tambah(5, '6').should.equal('Parameters value must be number')
  })
})

describe('Test tambah 5', () => {
  it('Test tambah (5)', () => {
    tambah(2).should.equal("You should add two parameters")
  })
})

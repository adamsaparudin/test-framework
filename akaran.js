function akar(a) {
  if (a === undefined)
    return "You should add one parameters"
  if (typeof a !== "number")
    return "Parameters value must be number"
  if (a < 0)
    return a
  else
    return Math.sqrt(a)
}
module.exports = akar

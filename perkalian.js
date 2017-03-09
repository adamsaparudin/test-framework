function kali(a, b) {
  if (a === undefined || b === undefined)
    return "You should add two parameters"
  if (typeof a !== "number" || typeof b !== "number")
    return "Parameters value must be number"
  else
    return a * b
}

module.exports = kali

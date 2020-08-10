/**
 * JS中無限大的數值 Infinite
 */
console.log(5 / 0, -5 / 0)
console.log(Infinity == -Infinity)
console.log(Infinity > 5)
console.log(Infinity > -Infinity)
console.log(5 / 0 === Infinity, -5 / 0 === -Infinity)
var v1 = parseInt("5")
console.log(v1) // 5
var v2 = parseInt("3.14")
console.log(v2) // 3
var v3 = parseInt("3.999")
console.log(v3) // 3
var v4 = parseFloat("5")
console.log(v4) // 5
var v5 = parseInt("hello")
console.log(v5, isNaN(v5)) // NaN true
console.log(isFinite(5 / 0), isFinite(-5 / 0), isFinite(5 / 1), isFinite(-5 / 1)) // false false true true
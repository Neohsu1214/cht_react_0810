/**
 * JS中的 boolean
 */
var x1 = Boolean(0)
console.log(typeof x1, x1) // false
var x2 = Boolean("")
console.log(typeof x2, x2) // false
var x3 = Boolean(NaN)
console.log(typeof x3, x3) // false
var x4 = Boolean(null)
console.log(typeof x4, x4) // false
var x5 = Boolean(undefined)
console.log(typeof x5, x5) // false
// 以下幾個的結果就很匪夷所思了！！！
var x6 = Boolean(-1)
console.log(typeof x6, x6) // true?!
var x7 = Boolean(1)
console.log(typeof x7, x7) // true?!
var x8 = Boolean("true")
console.log(typeof x8, x8) // true?!
var x9 = Boolean("false")
console.log(typeof x9, x9) // true?!

/**
 * == 與 === 的差別
 * == 比較內容
 * === 比較內容 及 型態
 */

var x1 = 123
var x2 = '123'
var x3 = 12.34
var x4 = '12.34'
var x5 = 'hello'
var x6 = 'Hello'
console.log(x1 == x2, x1 === x2) // true false
console.log(x3 == x4, x3 === x4) // true false
console.log(x5 == x6, x5 === x6) // false false
console.log(x5 == x6, x5 === x6.toLocaleLowerCase()) // false true

var x7 = 1234
var x8 = new Number('1234')
console.log(x7 + x8) // 2468
console.log(x7 == x8, x7 === x8) // true false
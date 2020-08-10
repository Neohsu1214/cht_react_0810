/**
 * JS中的function建立方式
 * anonymous function
 * arrow function
 */

// normal function
function func1(a, b) {
    return a * b
}
console.log(func1(5, 6))

// anonymous function
var x1 = function (a, b) {
    return a * b
}
console.log(x1(7, 8))

// arrow function
var x2 = (a, b) => { return a * b }
console.log(x2(9, 10))
// 如果只有一個expression就return的話，還可再簡化！
var x3 = (a,b) => a*b
console.log(x3(11, 12))

// JS變數的scope
var token = 'abc'
var y1 = function () {
    var token = 'def'
    console.log("under y1:", token)
}
y1()
console.log("upper level", token)

var y2 = (a,b) => {
    var token = 'def'
    console.log(token, a*b)
}
console.log(x3(5,6))
y2(7,8)
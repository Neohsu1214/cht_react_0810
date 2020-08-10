/**
 * JS陣列的進階操作
 */

var s1 = 'qwertyuiop1234567890'
var a1 = Array.from(s1) // 直接將字串 split 成陣列
console.log(typeof a1, a1)

var a2 = a1.slice(3,5) // slice: 切割後取走！ 從 index 3 開始移走 5個
console.log(a2)
console.log(a1)
console.log(a2.pop(), a2) // pop: 將資料從陣列『尾』取出，相較於 push

a2.unshift('p') // unshift: 將資料從陣列『頭』放進去
console.log(a2)
console.log(a2.shift(), a2) // shift: 將資料從陣列『頭』取出

var a3 = [1,2,3,4,5]
var r3 = a3.join() // join: 將陣列值串起來，預設使用","
console.log(typeof r3, r3)
var r4 = a3.join("-") // join: 可使用指定的字元串起來
console.log(typeof r4, r4)

var a5 = Array.from("HelloWorldJavascript") // from: 將字串轉陣列
a5.sort() // sort: 直接將陣列進行排序
console.log(a5)

// Array 的 iteration: forEach
var summation = 0
a3.forEach(function(element) {
    summation += element
}, this)
console.log(summation) // 15
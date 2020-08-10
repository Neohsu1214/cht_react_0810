/**
 * JS 的陣列操作
 * push, delete, 直接給值
 */

var array1 = new Array()
array1.push('Apple')
array1.push('Banana')
array1[3]='Donut'
console.log(array1) // [ 'Apple', 'Banana', <1 empty item>, 'Donut' ]

array1.push("Eary Gray Tea")
console.log(array1) // [ 'Apple', 'Banana', <1 empty item>, 'Donut', 'Eary Gray Tea' ]

// 指定刪除某個陣列值
delete array1[3] 
console.log(array1) // [ 'Apple', 'Banana', <2 empty items>, 'Eary Gray Tea' ]

array1[2] = 'cookie'
array1[3] = 'donut'
console.log(array1) // [ 'Apple', 'Banana', 'cookie', 'donut', 'Eary Gray Tea' ]
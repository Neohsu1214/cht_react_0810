/**
 * var 對於變數宣告與執行次序的重(嚴)要(重)性說明
 * 未經過 var 宣告就存取變數會被視為不存在的物件而有 exception
 * 若要強制 var 宣告，就加上 "use strict";
 */

"use strict"; // 代表在程式中強制進行 var 的變數宣告

console.log(b)
// console.log(a) // 由於a未經過 var 宣告，所以會被視為不存在的物件而有 exception!!!
var b = 5
var a 
a = 3
console.log(b)
console.log(a)
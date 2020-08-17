/**
 * 介紹Babel如何將不支援的ES語法轉換成瀏覽器可執行的JS版本
 * npx babel lab1_var_let_const.js
 * 請注意，要給定 .babelrc 檔，babel才會進行轉換
 * 在執行一次轉譯，會發現產出的JS內容不一樣囉！
 * 是很標準的JS語法了！！！
 */

let x = 5
console.log(x)
x += 1
console.log(x)

const y = `hello world, actually x=${x}`
console.log(y)
const z = `hihi, x=${x}`
console.log(z)

/* 轉譯後的內容如下

"use strict"; // 不允許使用 global 變數

var x = 5;
console.log(x);
x += 1;
console.log(x);
var y = "hello world, actually x=".concat(x);
console.log(y);
var z = "hihi, x=".concat(x);
console.log(z);
*/
/**
 * 介紹Babel如何將不支援的ES語法轉換成瀏覽器可執行的JS版本
 * npx babel lab1_var_let_const.js
 */

let x = 5
console.log(x)
x += 1
console.log(x)

const y = `hello world, actually x=${x}`
console.log(y)
const z = `hihi, x=${x}`
console.log(z)
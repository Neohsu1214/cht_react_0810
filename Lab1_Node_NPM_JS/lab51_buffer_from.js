/**
 * 詳談 Buffer.from 
 * 可以在 from 某字串時，就以指定編碼產生 buffer
 * 並透過toString()指定編碼輸出
 */

const string1 = "Hello"

let buffer0 = new Buffer.from(string1)
let buffer1 = new Buffer.from(string1, 'ascii')
let buffer2 = new Buffer.from(string1, 'utf8')
let buffer3 = new Buffer.from(string1, 'utf16le')
let buffer4 = new Buffer.from(string1, "ucs2")
//let buffer5 = new Buffer.from(string1, "ms950") // 不支援
//let buffer6 = new Buffer.from(string1, "big5") // 不支援
console.log("[hex->default]buffer0 = "+buffer0.toString('hex')) //48656c6c6f
console.log("[hex->ascii]buffer1 = "+buffer1.toString('hex')) //48656c6c6f
console.log("[hex->utf8]buffer2 = "+buffer2.toString('hex')) //48656c6c6f
console.log("[hex->utf16le]buffer3 = "+buffer3.toString('hex')) //480065006c006c006f00
console.log("[hex->ucs2]buffer4 = "+buffer4.toString('hex')) //480065006c006c006f00

console.log("[hex->base64]]buffer0 = "+buffer0.toString('base64')) //SGVsbG8=
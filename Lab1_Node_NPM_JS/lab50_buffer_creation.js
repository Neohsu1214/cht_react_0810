/**
 * 詳談 Buffer 轉碼
 * buffer可透過給定編碼後輸出(還原)原始內容
 */

let buffer1 = new Buffer.alloc(20)
let buffer1length = buffer1.write("ABCD")

let buffer2 = new Buffer([97, 98, 99])

let buffer3 = new Buffer.from("Hello")

console.log("buffer1 length = " + buffer1length)
console.log("buffer=" + buffer1.toString('hex')) // 將 buffer1 以 16進制輸出 -> 4142434400000000000000000000000000000000 醜！
console.log("[correct] buffer=" + buffer1.toString('hex', 0, buffer1length)) // 將 buffer1 以正確長度的 16進制輸出 (如果以axios交換資料axios會自動幫你處理喔～)
console.log("[correct] buffer=" + buffer1.toString('hex', 0, buffer1length - 2)) // 4142
console.log("[correct] buffer=" + buffer1.toString('hex', 0, buffer1length + 2)) // 414243440000
console.log('[utf-8] buffer1=' + buffer1.toString('utf-8')) // ABCD

console.log("buffer2=" + buffer2.toString('hex'))
console.log("buffer2=" + buffer2.toString('ascii'))
console.log("buffer2=" + buffer2.toString('utf-8'))

console.log("buffer3=" + buffer3.toString('ascii'))
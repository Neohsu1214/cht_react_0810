/**
 * buffer的相接
 * 通常用於接收大檔案 ex: 圖檔
 */
const buffer1 = new Buffer.from('Hello ')
const buffer2 = new Buffer.from('World')
const buffer3 = new Buffer.from(', node.js')
// buffer4 由 buffer1,2,3 串起來
const buffer4 = new Buffer.concat([buffer1, buffer2, buffer3])
// 取得長度
const l1 = buffer1.length+buffer2.length+buffer3.length
const l2 = buffer4.length
// 輸出比較結果
console.log(l1, l2)
console.log("buffer4 content="+buffer4.toString())
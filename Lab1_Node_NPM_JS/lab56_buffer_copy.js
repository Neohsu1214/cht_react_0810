/**
 * Buffer 的 複製： copy
 */

const buffer1 = Buffer.from("ABCDEFG1234567abcdefg")
const buffer2 = Buffer.allocUnsafe(buffer1.length)
buffer1.copy(buffer2) // 啥？！可以塞值？ buffer2不是宣告成const嗎？由此可知 Buffer 變數只是一個指標
console.log("buffer2 contnet: "+ buffer2.toString())
/**
 * Buffer assign 的方法
 * .alloc
 * new Buffer() / .allocUnsafe() / alloc()
 * .from
 */

// 先要一塊 20 bytes 的 buffer，並透過 write 寫入 10 個bytes
let buffer1 = Buffer.alloc(20)
console.log(buffer1) // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
len = buffer1.write("ABCDE54321")
console.log(len, buffer1) // 10 <Buffer 41 42 43 44 45 35 34 33 32 31 00 00 00 00 00 00 00 00 00 00>

// 直接透過 array 建立 buffer
let buffer2 = new Buffer([97,98,99,100,101,102])
console.log(buffer2) //<Buffer 61 62 63 64 65 66>

// 直接透過 字串 建立 buffer
let buffer3 = new Buffer.from("Hello")
console.log(buffer3) //<Buffer 48 65 6c 6c 6f>
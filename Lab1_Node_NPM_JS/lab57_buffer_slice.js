/**
 * 針對 buffer 做切割: slice
 */

const buffer1 = Buffer.allocUnsafe(26)

for (let i = 0; i < 26; i++) {
    buffer1[i] = i + 97
}

const buffer2 = buffer1.slice(0, 3)
console.log('buffer2 content: ' + buffer2.toString()) // abc

const buffer3 = new Buffer.from('www.uuu.com.tw')
const buffer4 = buffer3.slice(0, 9)
console.log('buffer4 content: ' + buffer4.toString()) // www.uuu.c
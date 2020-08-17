/**
 * buffer 的比較
 */

const string1 = "Hello"
const string2 = "I say"

// 直接用字串比對: localeCompare
// string1.compare(string2) // error
const result0 = string1.localeCompare(string2)
console.log(result0) // -1 

// 改用 buffer 比對: compare
const buffer1 = Buffer.from(string1)
const buffer2 = Buffer.from(string2)
const result1 = buffer1.compare(buffer2)
if (result1 < 0) {
    console.log(`${buffer2} should come after ${buffer1}`)
} else if (result1 == 0) {
    console.log(`${buffer2} is equal to  ${buffer1}`)   
} else {    
    console.log(`${buffer2} should come before ${buffer1}`)
}

// 直接拿 buffer 每個 bytes 內容去比對後排序輸出！
console.log([buffer2, buffer1].sort(Buffer.compare))
// 直接拿 string 每個 bytes 內容去比對後排序輸出！
console.log([string2, string1].sort(String.compare))
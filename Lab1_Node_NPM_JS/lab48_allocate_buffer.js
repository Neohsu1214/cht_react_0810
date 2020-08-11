/**
 * Buffer 的 大小指定方式
 *  allocUnsafe: 內容一堆垃圾
 *  alloc: 內容會是清空的
 *  不指定: 等同於alloc
 */

for (let i = 0; i < 2; i++) {
    const buffer1 = Buffer.allocUnsafe(30)
    console.log(buffer1) // 會發現每次被alloc的 buffer 內容都有垃圾...

    console.log("do clean buffer")
    buffer1.fill(0)
    console.log(buffer1)
}

console.log("Using AllocSafe")
for (let i = 0; i < 2; i++) {
    const buffer1 = Buffer.alloc(30)
    console.log(buffer1) // 會發現每次被alloc的 buffer 內容都是清空過的

}

console.log("unspecify")
for (let i = 0; i < 2; i++) {
    const buffer1 = Buffer(30) // 不指定時，預設動作等同 alloc
    console.log(buffer1)

}


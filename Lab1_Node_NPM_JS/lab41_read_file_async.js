/**
 * 以非同步的方式進行檔案的讀取
 */
var fs = require('fs')
const { FILE } = require('dns')
const FILE_PATH = "../README.md"
const READ_LIMIT = 10000
// 對檔案以唯讀方式開啟（為非同步開啟）
fs.open(FILE_PATH, 'r', (error, handler) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("file opend, continue")
    let buffer = new Buffer(READ_LIMIT, 0) // 用來讀檔
    // 開始讀檔並輸出
    fs.read(handler, buffer, 0, READ_LIMIT, null, (error, length) => {
        console.log(`total:${length} bytes`)
        const result = buffer.slice(0, length)
        console.log("data read:" + result.toString())
        fs.close(handler, () => { console.log("close successfully!") })
    })
})
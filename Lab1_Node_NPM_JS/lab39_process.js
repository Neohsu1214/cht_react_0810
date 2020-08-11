/**
 * 說明如何使用 node 來進行檔案與路徑的操作
 * process
 * fs
 */
var process = require('process')
console.log(process.cwd()) // 顯示檔案目前所在路徑
var fs = require('fs')
const FILE_PATH = "../README.md"

// 將 README.md 內容輸出
console.log("Program Start")
const file1 = fs.readFileSync(FILE_PATH)
console.log(typeof file1) // object
console.log(file1.toString())
console.log("Program Ended")
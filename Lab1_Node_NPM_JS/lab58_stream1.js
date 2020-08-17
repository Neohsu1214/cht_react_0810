/**
 * File 的 Read Stream
 * Stream 是非同步運行的，所以要偵測不同的 event(data, end, error, finish) 來進行不同的處理(callback)
 */
const fs = require('fs')
let data = ''
// 取得目前工作目錄
console.log(`current working directory: ${process.cwd()}`)
// 取得目前檔案路徑
console.log(`internal variable __dirname=${__dirname}`)

// 透過 FileStream 讀取檔案內容
const readerStream = fs.createReadStream('../README.md')
readerStream.setEncoding('UTF8')

// Stream 是非同步運行的，所以要偵測不同的 event(data, end, error) 來進行不同的處理
readerStream.on('data', function(chunk) {
    data += chunk
})
readerStream.on('end', function(){
    console.log(data)
})
readerStream.on('error', function(error){
    console.log(error.stack)
})

console.log("Program Ended!") // 會先被印出！印證Stream是非同步處理的！
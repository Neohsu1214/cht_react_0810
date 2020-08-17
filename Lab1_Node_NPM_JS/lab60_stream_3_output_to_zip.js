/**
 * 將檔案讀出後進行壓縮，並將壓縮後的結果輸出到檔案內
 * readerStream.pipe(zip).pipe(writeStream)
 */

const fs = require('fs')
const zlib = require('zlib')
const readerStream = fs.createReadStream("../README.md")
readerStream.setEncoding("UTF8")
const zip = zlib.createGzip()
const writeStream = fs.createWriteStream('README.md.gz')
readerStream.pipe(zip).pipe(writeStream) // 將 readStream 的結果輸出給 zip 進行壓縮，並將壓縮後的結果輸出給 writeStream 寫成檔案
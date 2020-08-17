/**
 * File Stream 的 Write
 * Stream寫入也是非同步唷！所以要針對不同 event(finish, error)做處理
 */
var fs = require('fs')
const data = 'Node.js 是能夠在伺服器端運行 JavaScript 的開放原始碼、跨平台 JavaScript 執行環境。Node.js 由 Node.js Foundation（已與 JS Foundation 合併為 OpenJS Foundation[3]）持有和維護[4]，亦為 Linux 基金會的專案[5]。Node.js採用Google開發的V8執行程式碼，使用事件驅動、非阻塞和非同步輸入輸出模型等技術來提高效能，可最佳化應用程式的傳輸量和規模。這些技術通常用於資料密集的即時應用程式。'
const writerStream = fs.createWriteStream('lab59_output.txt')
console.log('Begin to write')
writerStream.write(data, 'utf8')
writerStream.end()
console.log('writer ended return!')

// Stream寫入也是非同步唷！所以要針對不同 event(finish, error)做處理
writerStream.on('finish', function() {
    console.log('write complete!')
})
writerStream.on('error', function() {
    console.log(err.stack)
})

console.log('Program Ended!')

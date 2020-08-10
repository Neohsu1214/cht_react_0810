/**
 * 透過 http 套件來建立一個簡易的 http server 
 * 並設定啟動 port 為 8765
 */

 var http = require('http')

 // 建立一個handler來處理request
 function processRecord(request, response) {
     // response body
    var body = 'react JS Tutorial\n'
    var contentLength = body.length
    // response header
    response.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    })
    // do response!
    response.end(body)
 }
 var server = http.createServer(processRecord)
 console.log("server created, start listen to port 8765")
 // 於 port 8765 上建立微服務（Mock Server??）
 server.listen(8765)
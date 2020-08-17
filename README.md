# CHT React & Full Stack

## lab3
* when proxy is required, use
```javascript
var request = require('request');
var URL = "https://www.cwb.gov.tw/V8/C/"
var PROXY_URL = "http://proxy.cht.com.tw:8080"
// 原本的 request 設定 proxy之後， delegate 給另外建立一個 proxyRequest 物件來做事情
var proxyRequest = request.defaults({ 'proxy': PROXY_URL })

// function (error, responese, body) 是基本的 callback handler 宣告格式
// 傳回是成功的資料會存到body中
proxyRequest(URL, function (error, responese, body) {
    if (!error && responese.statusCode == 200) {
        console.log(body);
    } else {
        console.log(error);
        console.log(responese.statusCode);
        console.log(body);
    }
})

console.log("Hi, my program finished")

```

## Lab48,49 javascript也是有記憶體處理的唷！
* stack
* heap
   * variable
   * buffer: 用來處理原始資料，方便在不同語言間傳遞資料
* global
* constant
* code
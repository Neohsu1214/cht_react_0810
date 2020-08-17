# CHT React & Full Stack

## Lab1_Node_NPM_JS - lab3
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

## Lab1_Node_NPM_JS - lab48,49 javascript也是有記憶體處理的唷！
* stack
* heap
   * variable
   * buffer: 用來處理原始資料，方便在不同語言間傳遞資料
* global
* constant
* code

## Lab2_Babel_Modern_JS_Syntax
* 初始化babel 專案
```
    npm init -y
```
* 安裝babel指令套件與webpack套件
```
npm install babel-loader @babel/core @babel/cli @babel/preset-env webpack
```
* 查看babel版本
```
npx babel --version
```
* 使用babel進行轉譯(轉譯到目前最低限度的javascript版本，若要轉譯成ES6,7等可支援的，必須安裝別的外掛)
```
npx babel lab1_var_let_const.js
```
* 在package.json給定『"build": "babel src -d out"』後，即可透過以下指令，將指定目錄中的檔案都編譯成Legacy JS
```
npm run build
```

## Lab3 建立 React 專案
* 初始化專案(專案名稱不可以有大寫)，用 npx 的好處是每次建立專案都會使用最新的套件
```
npx create-react-app lab3_react_start
```
* 啟動開發模式(會在 http://localhost:3000 啟動服務)
```
npm run start
```
* Chrome 安裝外掛工具（可以偵測所開啟的網頁是dev還是prod，並在F12中可看到Components跟Profiler兩個工具)
```
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=zh-TW
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=zh-TW
```
* 安裝 serve 套件 (之後可以用 serve -s build 啟動 production 版本的 build)
```
npm install -g serve
```
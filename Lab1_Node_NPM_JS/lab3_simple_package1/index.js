/**
 * request 是一個 http client 的 npm 套件
 */ 
var request = require('request');
var URL = "http://web.chtti.com.tw"

// function (error, responese, body) 是基本的 callback handler 宣告格式
// 傳回是成功的資料會存到body中
request(URL, function (error, responese, body) {
    if (!error && responese.statusCode == 200) {
        console.log(body);
    } else {
        console.log(error);
        console.log(responese.statusCode);
        console.log(body);
    }
})

console.log("Hi, my program finished")

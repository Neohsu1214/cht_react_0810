/**
 * 當未使用強制宣告的時候，會造成變數『誤用』的狀況頻繁發生
 * debug也不容易
 * 所以建議要加入"use strict";
 */

var b1 = 5
console.log("stage1, b1=", b1)
b1 += 5
console.log("stage2, b1=", b1)
bl = 0 // 要打 b1 打成 bl 了！！！ 
console.log("stage3, b1=", b1)
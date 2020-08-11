/**
 * 再用個例子說明 let 為何比 var 安全
 */
var a = 100
var b = 200
if (a === 100) {
    //console.log("inside if scope a=", a) // 因為在這個scope內，a是 let 變數，所以不可以提前存取
    console.log("inside if scope b=", b)
    let a = 50
    var b = 400 // 會把外面宣告的 var b 給覆蓋掉！！！
    console.log("a, b=", a, b)
}
console.log("a, b=", a, b)

function xyz() {
    console.log("inside xyz scope b=", b) // 所以，var 只有對 function有分 scope...天殺的好危險啊！
    let a = 55
    var b = 444
    console.log(a, b)
}
xyz()
console.log(a, b)
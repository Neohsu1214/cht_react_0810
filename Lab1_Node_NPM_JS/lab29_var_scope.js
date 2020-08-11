/**
 * JS中變數宣告時機不同，會造成許多有趣的結果
 * 也因此 var 容易『污染』name space!
 */
var var3 = 5
function foo() {
    console.log("var1=", var1)
    console.log("var3=", var3)
    var var1 = 300
    var2 = 400
    var var3 = 500
    if (var1 > 100) {
        var var3 = 800 // 會發現if內宣告的 var3 跟 外面宣告的其實是同一個！！ 
        console.log("inside if, var3=", var3)
    }
    console.log("var1=", var1, "var2=", var2, 'var3=', var3)
}
// console.log(var2) // 因為在執行 foo 前就存取 var2 所以會報錯
foo()
// console.log(var1) // 因為 var1 在 foo 內，所以外部存取不到
console.log("after run foo, var2=,", var2) // 因為 var2 沒有用var 所以會宣告成 global.var2 而可在外部存取到，好危險啊!
console.log("var3=", var3)
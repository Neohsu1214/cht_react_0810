/**
 * JS中 var 的宣告容易造成的問題
 * ex 在裡面宣告的，竟然可以在外面存取
 * 爲修正這些議題，ES5 加上了 let 及 const 的宣告方式，盡量別使用 var
 */
function printSomething(x) {
    console.log("before", message)
    if (x>10) {
        var message = "hihi"
    } else {
        var message = "XXXXXX"
    }
    console.log(message) // 竟然存取得到？！！
}
printSomething(5)
printSomething(10)
printSomething(15)
/**
 * var 的變數是不可 config 的
 * 也就是無法被 delete 的
 */
var v1 = 100
v2 = 200
console.log(v1, v2)
delete global.v2
delete global.v1
console.log(v1)
v2=300
console.log(v1, v2)
delete v2
console.log(v1)

function bar(){
    console.log("in bar()")
    var v3= 300
    v4 = 400
    console.log(v3, v4)
    delete v3
    delete v4
    console.log(v3)
    //console.log(v4) // 因為不是 var宣告的，所以delete就真的刪除了
    v4=500
    console.log(v3, v4)
    delete this.v4 // 因為v4是 global.v4，所以刪除了 this.v4 並沒有真的刪掉v4
    console.log(v3, v4)
    //-----
    v4=600
    console.log(v3, v4)
    delete global.v4 // 這次就真的刪掉囉！
    console.log(v3, v4)
    
}
bar()

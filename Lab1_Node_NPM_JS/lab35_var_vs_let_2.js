/**
 * var可以被重複宣告，後可蓋前
 * let不可被重複宣告
 */
function scopeTest() {
    console.log("x=", x)
    var x = 5
    console.log("x=", x)
    var x = 6 // var 可以被重複宣告
    console.log("x=", x)

    // ----
    let y =3
    console.log("y=", y)
    //let y = 5 // let 不可以被重複宣告
    if (true) {
        let y = 5 // 因為在不同 scope，所以可以再次宣告同名的 let變數
    }
    console.log("y=", y)
}
scopeTest()
/**
 * var 與 let 宣告的變數，在 for loop 中也有很大的存取差異
 * 總之，let就是比較嚴謹，卡好啦！
 */

function loop1() {
    for (var i = 0; i < 10; i++) {
        console.log("inner loop:", i)
    }
    console.log("finish! i=", i) // 竟然可以存取到 for loop 用 var 定義的變數？！
}
loop1()

function loop2() {
    for (j = 0; j < 10; j++) {
        console.log("inner loop:", j)
    }
    console.log("finish! j=", j) // 竟然可以存取到 for loop 的變數？！
}
loop2()

function loop3() {
    for (let k = 0; k < 10; k++) {
        console.log("inner loop:", k)
    }
    //console.log("finish! k=", k) // 用 let 宣告的就真的存取不到囉！
}
loop3()

function loop4() {
    var l = 0
    for (let m = l; m < 10; m++) {
        console.log("m=", m)
    }
    console.log("l=", l)
    //console.log("m=", m) // 用 let 宣告的就真的存取不到囉！
}
loop4()
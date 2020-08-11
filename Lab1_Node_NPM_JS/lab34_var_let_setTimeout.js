/**
 * 用 for loop 搭配 setTimeout 來說明 let 為什麼就是比 var 好！
 */
function compareVarLet() {
    for (var i = 0; i < 10; i++) {
        //console.log(i) // 會正常列出 0,1,2,3,4,5,6,7,8,9
        setTimeout(() => { console.log("var i=",i) }, 1000) // 會印出一堆10!
    }
    for (let j = 0; j < 10; j++) {
        //console.log(j) // 會正常列出 0,1,2,3,4,5,6,7,8,9
        setTimeout(() => { console.log("var j=",j) }, 1000) // 也會正常印出 0,1,2,3,4,5,6,7,8,9! Good!!
    }
}
compareVarLet()
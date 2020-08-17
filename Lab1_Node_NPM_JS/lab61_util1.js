/**
 * 使用 setTimeout 建立一個非同步呼叫
 */
console.log(`current file name = ${__filename}, dir=${__dirname}`)
function printSomething(){
    console.log("hi welcome!!")
}
setTimeout(printSomething, 4000) // 故意製造一個非同步呼叫
console.log("program ended")
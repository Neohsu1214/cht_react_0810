/**
 * setTimeout 非同步呼叫可以被取消？
 * 可以，使用 clearTimeout
 * 本範例使用 setInterval 動態給定 timeout 時間
 */
function printSomething() {
    console.log("Hi welcome(cancelable)!")
}

t = setTimeout(printSomething, 4000)
clearTimeout(t)

let counter = 0
function printHello() {
    console.log(`Hello world:${counter}`)
    counter++
    if (counter > 10) {
        clearTimeout(timer)
    }
}
timer = setInterval(printHello, 2000) // 設定每隔2秒執行一次 printHello()

console.log("lab62 ended")
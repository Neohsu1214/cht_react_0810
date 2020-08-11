/**
 * 以 Promise 進行非同步事件處理
 * resolve: 非同步事件執行成功要做的事 -> then
 * reject: 非同步事件執行失敗要做的事 -> catch
 */
const promise = new Promise((resolve, rejects) => {
    // resolve: 處理成功要做的事, reject: 處理失敗要做的事情
    setTimeout(() => {
        try {
            //throw new Error("oops!")
            console.log("no error")
            resolve(100) // 會把100丟給 promise.then
        } catch (e) {
            rejects(e) // 會把e丟給 promise.catch
        }

    }, 2000)
})

console.log("program start")
promise
    .then(result => console.log('OK, result=' + result))
    .catch(error => console.log('Found Exception:' + error))
console.log("program ended")
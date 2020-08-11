/**
 * 另一種 Promise 比較簡單的用法
 */
let myFunction = function () {
    throw new Error("oopps")
    //console.log("things done!")
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(2000)
    .then(myFunction)
    .catch(error => {
        console.log("error is:" + error)
    })
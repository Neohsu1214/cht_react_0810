/**
 * 透過 Event 的 emmit 與 on 來進行 事件觸發 與 事件處理
 */
const events = require('events')
const eventEmitter = new events.EventEmitter()

const firstHandler = function doSomethingFirst() {
    console.log("do something when first happen")
    eventEmitter.emit('second') // 觸發 'second' 事件
    eventEmitter.emit('third') // 觸發 'third' 事件
}

eventEmitter.on('first', firstHandler) // 當收到 'first' 事件時，執行 firstHandler
eventEmitter.on('second', function () { // 當收到 'second' 事件時，執行一個 anonymous function
    setTimeout(() => { console.log("data received successfully, will process") }, 2000)
})
eventEmitter.on('third', function () { // 當收到 'third' 事件時，執行一個 anonymous function
    setTimeout(() => { console.log("backup data complete, will proceed") }, 3000)
})

// 觸發 'first' 事件
eventEmitter.emit('first')
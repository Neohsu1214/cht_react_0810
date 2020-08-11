/**
 * 說明 console 除了 log 以外，還有 warn 跟 time/timeEnd 可以使用
 */
global.coffee = 'latte'
global.juice = 'lemonade'

function printSomething(name) {
    console.time(global[name])
    console.log(global[name])
    console.warn(global[name]) // 在 debug mode 中可看到不同配色
    console.timeEnd(global[name]) // 必須與 time 搭配才看得到結果
}
printSomething('coffee')
printSomething('juice')

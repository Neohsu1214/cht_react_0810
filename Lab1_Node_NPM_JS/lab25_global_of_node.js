/**
 * node中有一個 global 變數，就叫做 global
 * 未經過 var 宣告的，會自動被加入 global 陣列中！！！
 */
global.coffee = 'latte'
global.juice = 'lemonade'
hello = 'world' // 未經過 var 宣告的，會自動被加入 global 陣列中！！！
var fruit = 'apple' // 有透過var宣告的，不會被放到 global 中！！！

function printSomething(name) {
    console.log(global[name])
}
printSomething('coffee') // latte
printSomething('juice') // lemonade
printSomething('hello') // world
printSomething('fruit') // undefined
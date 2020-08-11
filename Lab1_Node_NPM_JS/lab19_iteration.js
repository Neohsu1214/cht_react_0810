/**
 * JS中for loop 的執行方式
 * in: 以 array 的 index 為 iteration變數
 * of: 以 array 的 item 為 iteration變數
 */

var chosen = [1, 2, 3, 4, 5, 6, 8, 10]
for (var index in chosen) {
    console.log('index = ', index, 'value = ', chosen[index])
}

for (var item of chosen) {
    console.log('value = ', item)
}

// JS變數也可以在字串中嵌入！！但 '' 要變成 ``
var stores = ['7-11', 'fami', 'OK', 'hi-life']
for (index in stores) {
    console.log(`index=${index}, value=${stores[index]}`)
}

// dictionary 也可以進行 iteration!
var dict1 = { name: 'Mark', role: 'R&D', age: 43 }
for (index in dict1) {
    console.log(index, dict1[index])
}
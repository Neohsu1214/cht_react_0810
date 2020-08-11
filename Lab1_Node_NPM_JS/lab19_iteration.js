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
/**
 * const是常數，必須宣告時就給值
 * 不可再被設值
 * 宣告當下的值就固定了，不會改變
 * 
 * const 對於 array 而言也是個記憶體的 pointer 
 * 所以可以異動 array 內容
 * 但不可以異動 pinter 記憶體位置
 */
const PROGRAM_TITLE = 'hello' // const是常數，必須宣告時就給值
//PROGRAM_TITLE += ' world' // const是常數，不可再被設值

let MY_TITLE = 'hello'
MY_TITLE += ' world'
console.log(MY_TITLE)

const MAX1 = 1
let i = 100
const MAX2 = i + 50 // const宣告當下的資料就固定了，不會改變
i += 200
console.log(MAX1, MAX2, i) // 1, 150, 300

// 印證 const 宣告是個 pointer
const array1 = [1,2,3] // array1是個pointer指向一個 array的記憶體位置
console.log(array1) // [ 1, 2, 3 ]
array1.push(4)
array1.push(5)
array1.push(6)
console.log(array1) // [ 1, 2, 3, 4, 5, 6 ] 印證 const 宣告是個 pointer

// 所以 const array 與 let 宣告的 array 依樣嚕？
let array2 = [1,2,3] 
console.log(array2) // [ 1, 2, 3 ]
array2.push(4)
array2.push(5)
array2.push(6)
console.log(array2) // [ 1, 2, 3, 4, 5, 6 ] 
array2 = ['p','q','r'] // let宣告的才可以 re-assign
console.log(array2)
//array1 = ['p','q','r'] // const宣告的會因為要更改記憶體位置而報錯


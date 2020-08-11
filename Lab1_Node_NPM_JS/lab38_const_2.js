/**
 * const 對於 object 而言也是個記憶體的 pointer 
 * 所以可以異動 object 內容
 * 但不可以異動 pinter 記憶體位置
 */

const obj1 = {
    id: 1,
    name: 'Mark'
}

let obj2 = {
    id: 2,
    name: 'Neo'
}

console.log(obj1, obj2)

obj1.name = 'Mark Ho'
obj1.location = 'Taipei'
obj2.role = 'FAE'
console.log(obj1, obj2)

obj2 = {}
console.log(obj2)

// obj1 = {} // 會因為嘗試異動 const宣告變數的記憶體位置而報錯

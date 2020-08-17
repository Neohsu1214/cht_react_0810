/**
 * 簡介 destruct 的應用
 * 反著從 object 宣告變數值的方法
 * 反著從 array 宣告變數值的方法
 */
const user = {
    id: 42,
    is_verified: true
}
//const myId = user.id
//const is_verified = user.is_verified
//console.log(myId, is_verified, user.id, user.is_verified)

// 另一種寫法
const {id, is_verified} = user // 反著從object宣告變數值的方法？！
console.log(id, is_verified, user.id, user.is_verified)

// array 也可以用類似方式給定初始值
const numbers = [2, 4, 6, 8, 10]
const [n1, n2, n3] = numbers
console.log(n1, n2, n3) // 2,4,6
const employee = { name: "Mark", age: 44, role:"RD", location:"taipei" }
const {name, age, location} = employee
console.log(age, name, location) // 44 Mark taipei
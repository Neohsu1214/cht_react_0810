/**
 * JS預設的 = 是 pass by value
 * 對於 object 或 array 的話複製的是 pointer 的位址
 */
let number1 = 1
const number2 = number1
console.log(number1, number2) // 1,1
number1 = 5
console.log(number1, number2) // 5,1

const person = {name: 'Mark'}
const secondPerson = person
const thirdPerson = {...person}
console.log("before change:", person, secondPerson, thirdPerson) // Mark, Mark, Mark
person.name = 'Neo'
console.log("after change:", person, secondPerson, thirdPerson) // Neo, Neo, Mark 
// 因為object是pointer所以用=只是複製pointer的記憶體位置，所以secondPerson會跟著person變動
// 但 thirdPerson 是先透過 spread 展開後才重新設值，所以不受person影響
/**
 * ES6支援 ... 運算子
 * 對 array 而言是把舊的 array加上新的資料後，變成新的 array
 */
// ... 在 array 的應用
const numbers = [3, 1, 4, 1, 5, 6]
const newNumbers = [...numbers, 55, 33]
console.log(typeof newNumbers, newNumbers, Array.isArray(newNumbers))

// ... 在 JS物件 的應用
const course = {
    name: 'react programming',
    description: "react with spring boot"
}
const fullCourse = {
    ...course,
    duration:'56hours'
}
console.log(fullCourse)

// ... 在 function 參數上的應用
const filter1 = (...arguments) => {
    return arguments.filter(element => element > 10)
}
console.log('filter1=', filter1(1, 2, 10, 11, 22, 5, 3)) // 11, 22
console.log('filter2=', filter1([1, 2, 10, 11, 22, 5, 3])) // 空空的！注意被拿來當參數的是什麼！
console.log('filter3=', filter1(...[1, 2, 10, 11, 22, 5, 3])) // 11,22
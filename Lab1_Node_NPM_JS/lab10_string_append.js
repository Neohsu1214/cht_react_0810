/**
 * JS中字串處理
 */
console.log("I have" + 1 + 2 + "computers") // I have12computers
console.log(1 + 2 + " computers are mine") // 3 computers are mine
console.log("Sunday".indexOf("day")) // 3
console.log("Sunday".substr(3,3)) // day
console.log("Sunday".slice(3,6)) // day
var x1 = "Sunday, Monday, Tuesday, Wednesday".split(",")
console.log(typeof x1, x1, Array.isArray(x1)) //
var x2 = "\t\n abc def \n\t\n".trim()
console.log(x2) // abc def

"Sunday, Monday, Tuesday, Wednesday".split(",").forEach(p=>console.log(p.trim()))

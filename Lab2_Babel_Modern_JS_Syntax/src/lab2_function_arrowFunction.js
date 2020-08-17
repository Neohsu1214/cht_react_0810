/**
 * 說明一般 function 如何改成 arrow function
 * 並說明 arrow function 可以再怎麼簡化...到一個看不懂的地步 XD
 * => 左邊的參數只有一個時可以不用()
 * => 右邊的內容只有 return 一個操作時，可以不用{ return }
 */

 // Legacy JS function 寫法
function displayCourseName(name) {
    console.log(`[1] course name=${name}`)
}
// 改為 Arrow Function 的寫法
const displayCourseName2 = (name) => {
    console.log(`[2]course name=${name}`)
}
// 再簡化過的 Arrow Function 寫法
const displayCourseName3 = name => console.log(`[3] course name=${name}`)

// 不帶參數仍要給() 才行
const displayCourseName4 = () => {
    console.log(`[4] course name=unknown`)
}

// 一個正常版的 arrow function 與 一個極簡化版本的 arrow function
const earning = (attendee) => {
    return attendee * 8000
}
const earning2 = attendee => attendee * 8000

// 執行看看
displayCourseName("React")
displayCourseName2("React and spring boot")
displayCourseName3("React and rest")
displayCourseName4()
console.log(`earning1 = ${earning(5)}`)
console.log(`earning2 = ${earning2(10)}`)
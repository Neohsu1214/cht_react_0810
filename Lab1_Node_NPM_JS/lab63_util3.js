/**
 * console.log 可以傳入多個物件
 * console.dir 只可以傳一個物件
 */
const course = { name: "Node.JS", duration: 14, instructor: "Mark Ho" }
const duration = ['mon','tue','wed','thr','fri']
console.log(typeof course, course)
console.log(duration)
console.dir("console.dir with 1 argument")
console.dir(duration)
console.dir(course)
console.dir("console.dir with more than 1 arguments")
console.dir(course, duration) // 只有 course 被印出來！而且不會報錯！JS真是隨便啊～～
console.dir(duration, course) // 只有 duration 被印出來！而且不會報錯！JS真是隨便啊～～
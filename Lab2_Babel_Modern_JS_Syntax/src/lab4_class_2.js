/**
 * 一個 babel/preset-env無法轉譯的Class宣告
 * 透過增加 .babelrc 定義提升 Class 的使用靈活度
 * npm install @babel/plugin-proposal-class-properties
 * 並修改 .babelrc 加入以下宣告來增加 babel 對Class支援的外掛
 * "plugins": ["@babel/plugin-proposal-class-properties"]
 * 這時候開始，終於可以直接執行 src 目錄中的檔案了！！
 *
 * ES6/babel 的 class 外掛改變項目整理如下
 * 1. 不再需要依靠 constructor 去宣告變數
 * 2. 繼承的 class 也不再需要呼叫 super() 才能存取 父class 的變數
 */

class Course {
    duration = 49 // 會因為這種宣告方式而無法 build!!! (@babel/preset-env不支援)
    printDuration = () => {
        console.log(`duration = ${this.duration}`)
    }
}
const c1 = new Course()
c1.printDuration()

class ReactCourse extends Course {
    name = 'React'
    printCourse = () => {
        return `course name=${this.nane}`
    }
}
const c2 = new ReactCourse()
console.log(`c2 course ${c2.printCourse()}, duration ${c2.duration}`)
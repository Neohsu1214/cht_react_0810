/**
 * 一個 babel/preset-env無法轉譯的Class宣告
 * 透過增加 .babelrc 定義提升 Class 的使用靈活度
 * npm install @babel/plugin-proposal-class-properties
 * 並修改 .babelrc 加入以下宣告來增加 babel 對Class支援的外掛
 * "plugins": ["@babel/plugin-proposal-class-properties"]
 */

class Course {
    duration = 49 // 會因為這種宣告方式而無法 build!!! (@babel/preset-env不支援)
    printDuration = () => {
        console.log(`duration = ${this.duration}`)
    }
}
const c1 = new Course()
c1.printDuration()
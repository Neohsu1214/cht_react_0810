/**
 * 使用非同步方式開檔與關檔
 * fs.open
 * fs.close
 * 都要處理 error 與 handler 喔！！
 * 非同步處理的 callback function 如果要存取到上一層的變數時，必須使用 arrow function 或用 that
 */
const fs = require('fs')
function FileObject() {
    this.filename = ''
    this.file_exists = function (callback) {
        //const that = this
        console.log("What is this?" + this, this.filename)
        console.log("about to open:" + this.filename)
        
        // fs.open 為非同步
        //fs.open(this.filename, 'r', function (error, handler) { // this.filename 會是 undefined
        fs.open(this.filename, 'r', (error, handler) => {
            console.log("What is this?" + this, this.filename)
            if (error) {
                console.log("can not open: " + this.filename) // 這邊要用this存取filename變數，則一定要用 arrow function 或用 that
                callback(error)
                return
            }
            console.log("the file we process is " + that.filename)
            console.log("now we can process file with handler" + handler)

            // fs.close 為非同步
            fs.close(handler, function () { })

            callback(null, true)
        })
    }
}

let fo1 = new FileObject()
fo1.filename = "../README.mdx"
fo1.file_exists((error, result) => {
    if (error) {
        console.log("error open file:" + error)
        return
    }
    console.log("file exists!", result)
})
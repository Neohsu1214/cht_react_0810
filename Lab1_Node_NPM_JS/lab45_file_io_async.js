/**
 * 當想要非同步地存取一個不存在的檔案時...
 * 要在 fs.open 中檢查 error 的內容，判斷是不是要繼續後續的動作
 */
const fs = require('fs')
const FILE_NAME = "XYZ123"
fs.open(FILE_NAME, 'r', (error, handler) => {
    if (error) {
        console.log("error code=", error.code + "\n, reason=" + error.message)
        return
    }
    console.log("OK, can do something later")
})
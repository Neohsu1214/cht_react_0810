/**
 * 把其他 js 檔的 export 東東 import 進來用
 * 此檔案無法直接用 node 執行，請先執行 npm run build 後，執行 out 內的才可以執行
 */
import course from "./lab3_course" // 或 ./lab3_course.js 也可以
import cxxx from "./lab3_course" // 可改寫 default 名稱
console.log(course)
console.log(cxxx)

import { default_header, MAX_SIZE } from "./lab3_common_util"
// 以下因為一個js檔裡有兩個 export，所以不能改名字
default_header()
console.log(`max size=${MAX_SIZE}`) 
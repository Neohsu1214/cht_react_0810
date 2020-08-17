/**
 * 淺談 Buffer.toString()
 */

 const buffer1 = Buffer.alloc(62)
 for (let i=0; i<62; i++) {
    buffer1[i] = i+65;
 }

 console.log(buffer1.toString("ascii")) //ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
 // buffer切割，可先轉碼後再進行切割
 console.log(buffer1.toString("ascii", 0, 10)) 
 console.log(buffer1.toString("utf8", 0, 10)) 
 console.log(buffer1.toString(undefined, 0, 10)) // 也可以不指定編碼？！

/**
 * JSON物件在 buffer 中的處理
 */
const buffer1 = Buffer.from("Hello World")
const json1 = buffer1.toJSON()
console.log(typeof json1, json1)
/*輸出：
bject {
  type: 'Buffer',
  data: [
     72, 101, 108, 108,
    111,  32,  87, 111,
    114, 108, 100
  ]
} 
*/

const stringFromJSON1 = JSON.stringify(json1)
console.log(typeof stringFromJSON1, stringFromJSON1)
//輸出：string {"type":"Buffer","data":[72,101,108,108,111,32,87,111,114,108,100]}

// 另一種做法
const stringFromJSON_2 = JSON.stringify(buffer1)
console.log(typeof stringFromJSON_2, stringFromJSON_2)

const bufferLoadFromJSON1 = JSON.parse(stringFromJSON_2, (key, value) => {
    return (value && value.type === "Buffer")
        ? Buffer.from(value.data)
        : value
})
console.log(bufferLoadFromJSON1)
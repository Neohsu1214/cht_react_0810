/**
 * 正規表示式
 */

var x1 = "Foo, foo".replace(/[Ff]/g, 'q') // 把所有F,f換成q
console.log(x1) //qoo, qoo

var x2 = "Foo, foo".replace(/f/ig, 'q') // 把所有f不管大小寫換成q, i=ignoreCase
console.log(x2) //qoo, qoo

var x3 = "Foo, foo, Ffoo".replace(new RegExp("[Ff]", "g"), 'q') // 同x1的例子，只是改用 RegExp 物件處理
console.log(x3) //qoo, qoo, qqoo
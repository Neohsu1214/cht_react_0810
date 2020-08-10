var object1 = {
    "foo": 1,
    bar: 3
}
object1.foo += object1.bar
console.log(object1.foo)
// 可在終端機中下達 uglifyjs lab2_uglify_demo.js -c -m --mangle-props 可以查看被uglify過的js內容
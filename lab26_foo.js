/**
 * module 可透過 exports 給別的 js 引用後使用
 */
var header = "[lab26_foo]"
module.exports = {
    ooo: function (data) {
        console.log(header, ":[ooo]")
        console.log(data)
    },
    status: 'OK!'
}

